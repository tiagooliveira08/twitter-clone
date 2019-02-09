import { Router } from "express";
import { store } from "./../controllers/likeController";

const routes = Router();

routes.post("/:id", store);

export default routes;
