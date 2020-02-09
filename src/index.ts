import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";

const PORT: number | string = process.env.PORT || 4000;

const handleAppStart = () => console.log(`Server Running on ${PORT}`);

createConnection(connectionOptions)
  .then(() => {
    app.listen(PORT, handleAppStart);
  })
  .catch(error => {
    console.log(error);
  });
