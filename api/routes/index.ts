import * as express from "express";
import sneakerRouter from "./sneaker";


const routes = express.Router();
routes.use('/sneakers', sneakerRouter);

export default routes;