import { Router } from "express";
import { store } from "./../controllers/userController";
const routes = Router();

//description -> router to register user
//method -> POST
//path -> /register

routes.post("/register", store);

export default routes;
