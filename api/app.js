import express from "express";
import mongoose from "mongoose"
import tweetRouter  from "./routes/tweetRouter";

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
//server config
app.listen(port, () => {
    console.log("server running in port", port)
})

//connection mongodb
mongoose.connect("mongodb://user:password@localhost:27017/twitter", { useNewUrlParser : true}).then( ( ) => { 
    console.log("mongodb connected")
}).catch(error => { 
    console.log("error in connection with mongo", error)
})

//routes
app.use("/tweets", tweetRouter);