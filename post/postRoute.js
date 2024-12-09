import express from "express";
import post from "./post.js";


const postRoute = express.Router();

postRoute.get('/posts',(req,res)=>{
   res.send({message: 'post page',data: post});
})


 export default postRoute;