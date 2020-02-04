import dotenv from "dotenv";
dotenv.config();

import { ApolloServer, gql } from "apollo-server-koa";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";
import app from "./app";
import schema from "./schema";

const PORT: number | string = process.env.PORT || 4000;

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true
});

const handleAppStart = () => console.log(`Server Running on ${PORT}`);

server.applyMiddleware({ app });

createConnection(connectionOptions)
  .then(() => {
    app.listen(PORT, handleAppStart);
  })
  .catch(error => {
    console.log(error);
  });
