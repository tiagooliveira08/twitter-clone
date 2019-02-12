import { Router } from "express";
import { store } from "./../controllers/likeController";

const routes = Router();

//description -> like router
//method POST
//path -> /likes:id

routes.post("/:id", store);

export default routes;
