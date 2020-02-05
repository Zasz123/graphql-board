import dotenv from "dotenv";
dotenv.config();

import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";
import App from "./app";

const app = App.app;
const server = App.server;

const PORT: number | string = process.env.PORT || 4000;

const handleAppStart = () => console.log(`Server Running on ${PORT}`);

server.applyMiddleware({ app });

createConnection(connectionOptions)
  .then(() => {
    app.listen(PORT, handleAppStart);
  })
  .catch(error => {
    console.log(error);
  });
