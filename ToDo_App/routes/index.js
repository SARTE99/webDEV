const router = require("express").Router()
const TODO = require("../models/ToDo");



router.get("/", async(req, res)=>{
    const allTODO = await TODO.find();
    console.log(allTODO);
    res.render("index.ejs", {todo: allTODO});
})

router.post("/add/todo", (req, res)=>{
    // const todo = req.body.todo; 
    const todo = req.body["todo"];
    console.log(todo);
    const newToDo = new TODO({todo: todo})
    newToDo.save().then(()=>{
        console.log("Task Added");
        res.redirect("/");
    });
});

module.exports = router;