import cors from "koa-cors";
import logger from "koa-logger";
import koa from "koa";

class App {
  public app = new koa();
  constructor() {
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.use(cors());
    this.app.use(logger());
  };
}

export default new App().app;
