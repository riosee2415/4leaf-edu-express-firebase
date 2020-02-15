import express from "express";
import routes from "../routes";
import { home, addTodo, remove } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.post(routes.home, addTodo);
globalRouter.post("/removeTodo", remove);

export default globalRouter;
