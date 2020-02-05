import cors from "koa-cors";
import logger from "koa-logger";
import Koa from "koa";
import decodeJWT from "./utils/verifyJWT";
import schema from "./schema";
import { ApolloServer } from "apollo-server-koa";

class App {
  public app: Koa;
  public server: ApolloServer;
  constructor() {
    this.app = new Koa();
    this.server = new ApolloServer({
      schema,
      introspection: true,
      playground: {
        endpoint: "/playground"
      },
      context: (ctx): Koa.Context => {
        return ctx.state;
      }
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.use(cors());
    this.app.use(logger());
    // this.app.use(this.jwt);
  };

  private jwt = async (ctx: Koa.Context, next: Koa.Next): Promise<void> => {
    const { token } = ctx.headers;
    if (token) {
      const user = await decodeJWT(token);
      if (user) {
        ctx.state.user = token;
      } else {
        ctx.state.user = undefined;
      }
    }
    next();
  };
}

export default new App();
