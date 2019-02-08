import express from "express";
import mongoose, { mongo } from "mongoose"

const port = process.env.PORT || 3001;

const app = express();

app.listen(port, () => {
    console.log("server running in port", port)
})

mongoose.connect("mongodb://user:password@localhost:27017/twitter", { useNewUrlParser : true}).then( ( ) => { 
    console.log("mongodb connected")
}).catch(error => { 
    console.log("error in connection with mongo", error)
})
