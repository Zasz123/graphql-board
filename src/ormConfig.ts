import { ConnectionOptions } from "typeorm";

const connectionOption: ConnectionOptions = {
  type: "mysql",
  database: "graph-board",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456"
};

export default connectionOption;