import { Router } from "express";
import { auth } from "./../controllers/auth";
const routes = Router();

routes.post("/", auth);

export default routes;
