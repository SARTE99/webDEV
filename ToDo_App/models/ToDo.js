//
const mongoose = require("mongoose");
//create database schema 
const ToDoSchema = new mongoose.Schema({
    todo: {
        type: String, 
        required: true,
    }
});

//module.exports allows this model to be accesseble from any file in this folder (makes it global)
module.exports = new mongoose.model("Todo", ToDoSchema);
