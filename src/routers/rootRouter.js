import express from "express";
import { home } from "../controllers/initialController";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;