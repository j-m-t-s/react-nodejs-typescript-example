import * as express from "express";
import { Sneaker } from "../database/models/sneaker";
import { UserSneaker } from "../database/models/userSneaker";
import { UserSneakerDTO } from "../dtos/UserSneakerDTO";
const models = require("../database/models");

const sneakerRouter = express.Router();

sneakerRouter.get("/", async (req, res, next) => {
    const user = await models.User.findOne({});
    if (user === null) {
        // this.logger.error("Unable to find user to retrieve sneakers")
    }
    const sneakers: UserSneaker[] = await models.UserSneaker.findAll({
        where: { userId: user.id },
        include: [
            {
                model: models.Sneaker,
                as: "sneaker"
            }]
    })
    const dtos = sneakers.map(s => new UserSneakerDTO(s, s.sneaker))
    res.json(dtos);
});

sneakerRouter.post("/", async (req, res, next) => {
    const { size, userDescription, title } = req.body.sneaker;
    let sneaker: Sneaker | null = await models.Sneaker.findOne({ where: { title: title } });
    if (sneaker === null) {
        sneaker = {
            title
        }
        sneaker = await models.Sneaker.create(sneaker);
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
    res.json(newUserSneaker);
});


export default sneakerRouter;