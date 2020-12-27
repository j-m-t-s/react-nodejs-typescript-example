import * as bodyParser from "body-parser";
import * as express from "express";
import { sequelize } from "../database/models";
import { Logger } from "../logger/logger";
import User from "./user";

class Routes {

    public express: express.Application;
    public logger: Logger;
    //public db: Sequelize;



    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
        //this.db = sequelize;
        //this.logger.info("App initialized");
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // user route
        this.express.use("/", User);
    }
}

export default new Routes().express;