import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa-cors";
import logger from "koa-logger";
import schema from "./schema";
import { jwtConfig } from "./utils/token";

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(bodyParser());
app.use(jwtConfig);

const apollo = new ApolloServer({
  schema,
  context: ({ ctx }: { ctx: Koa.Context }) => {
    return {
      user: ctx.state.user
    };
  }
});

apollo.applyMiddleware({ app });

export default app;
