import express, { Router } from "express";
import { index, store } from "./../controllers/tweetController";

const routes = Router();

//@description -> route to tweets
//@methods -> GET, POST
//path -> tweets/

routes.get("/", index);
routes.post("/", store);

export default routes;
