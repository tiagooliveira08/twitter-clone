import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import tweetRouter from "./routes/tweetRouter";
import likeRouter from "./routes/likeRouter";

const port = process.env.PORT || 3001;

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(cors("*"));
app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(express.json());
//server config
server.listen(port, () => {
  console.log("server running in port", port);
});

//connection mongodb
mongoose
  .connect("mongodb://user:password@localhost:27017/twitter", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(error => {
    console.log("error in connection with mongo", error);
  });

//routes
app.use("/tweets", tweetRouter);
app.use("/likes", likeRouter);
