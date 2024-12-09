import express from "express";
import users from "./users.js";

const userRoute = express.Router();

userRoute.get('/users',(req,res)=>{
    res.send({message:'users page', data:users})
})

export default userRoute;