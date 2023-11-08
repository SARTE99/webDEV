//import express module
//can also use require: const express = require("express");
const express = require("express");
//can also use import mongoose from "mongoose";
const mongoose = require("mongoose");
//create an app using the express object 
const app = express();

//connect to mongodb database 
mongoose.connect("mongodb://127.0.0.1:27017/todo_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//install middleware 
//express.urlencoded allows us to access a new property on the req object called body (req.body)
app.use(express.urlencoded({extended: true}));
//express.static allows us to serve static files 
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
//use the require function to import our folder where we define our HTTP routes 
app.use(require("./routes/index"));
// app.use(require("./routes/todo"));

//use listen function to define the location of the server and a callback function
app.listen(3000, ()=>{
    console.log("server is running");
});