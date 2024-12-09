import express from "express";
import album from "./album.js";

const albumRoute = express.Router();

albumRoute.get('/albums',(req,res)=>{
    res.send({message:'albums page', data:album})
})

export default albumRoute;