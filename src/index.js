
const express=require("express");

const userController=require("./controllers/user_controler");
const bookController=require("./controllers/book_controller");
const publicController=require("./controllers/public_controller");
const commentController=require("./controllers/comment_controller");


const app=express();

app.use(express.json());

app.use("/users",userController)
app.use("/book",bookController)

app.use("/public",publicController)

app.use("/comment",commentController)


module.exports=app;