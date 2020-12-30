import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import { sequelize } from "../database/models";
import { Sequelize } from "sequelize";
import { Sneaker } from "../database/models/sneaker";
import { UserSneaker } from "../database/models/userSneaker";
const models = require("../database/models");



class User {

    public express: express.Application;
    public logger: Logger;
    private db: Sequelize;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
        this.db = sequelize;
        this.logger.info("App initialized");

    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // request to get all the users
        this.express.get("/users", async (req, res, next) => {
            const user = await models.User.findOne({});
            if (user === null) {
                this.logger.error("Unable to find user to retrieve sneakers")
            }
            const sneakers: UserSneaker[] = await models.UserSneaker.findAll({
                where: { userId: user.id },
                include:  [
                    {
                      model: models.Sneaker,
                      as: "sneaker"
                    }]
            })
            const joinedSneakers = sneakers.map(s => s.sneaker);

            res.json(sneakers);
        });

        // request to get all the users by userName
        this.express.get("/users/:userName", (req, res, next) => {
            this.logger.info("url:::::" + req.url);
            const user = this.users.filter(function (user) {
                if (req.params.userName === user.userName) {
                    return user;
                }
            });

            res.json(user);
        });

        // request to post the user
        // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
        this.express.post("/user", async (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            this.users.push(req.body.sneaker);
            const { size, userDescription, title } = req.body.sneaker;
            let sneaker: Sneaker | null = await models.Sneaker.findOne({ where: { title: title } });
            if (sneaker === null) {
                sneaker = {
                    title
                }
                await models.Sneaker.create(sneaker);
            }
            const user = await models.User.findOne({});
            const newUserSneaker: UserSneaker = {
                userDescription,
                title: title,
                size: size,
                userId: user.id,
                sneakerId: sneaker.id
            }
            await models.UserSneaker.create(newUserSneaker);
            //    const newSneaker =  Sneaker.create()
            res.json(this.users);
        });
    }
}

export default new User().express;