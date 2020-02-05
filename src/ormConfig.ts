import { ConnectionOptions } from "typeorm";

const connectionOption: ConnectionOptions = {
  type: "mysql",
  database: "graph-board",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/entities/*.ts"],
  host: process.env.DB_ENDPOINT,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default connectionOption;
