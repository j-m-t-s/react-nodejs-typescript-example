import * as express from "express";
import User from "./user";


const defaultRouter = express.Router();
defaultRouter.use('/users', User);

export default defaultRouter;