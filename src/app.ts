import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import cors from "koa-cors";
import logger from "koa-logger";
import schema from "./schema";
import decodeJWT from "./utils/verifyJWT";

class App {
  public app: Koa;
  public server: ApolloServer;
  constructor() {
    this.app = new Koa();
    this.middlewares();
    this.server = new ApolloServer({
      schema,
      introspection: true,
      playground: true,
      context: (ctx: Koa.Context) => ctx
    });
  }

  private middlewares = (): void => {
    this.app.use(logger());
    this.app.use(cors());
    this.app.use(this.jwt);
  };

  private jwt = async (ctx: Koa.Context, next: Koa.Next): Promise<void> => {
    const { token } = ctx.headers;
    if (token) {
      const user = await decodeJWT(token);
      if (user) {
        ctx.state.user = user;
      } else {
        ctx.state.user = undefined;
      }
    }
    // console.log(ctx.state);
    await next();
  };
}

export default new App();
