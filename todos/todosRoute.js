import express from "express";
import todo from "./todos.js";

const todosRoute = express.Router();

todosRoute.get('/todos', (req,res)=>{
    res.send({message:'todos page', data:todo})
})

export default todosRoute;