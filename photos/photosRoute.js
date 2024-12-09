import express from "express";
import photos from "./photos.js";

const photosRoute = express.Router();

photosRoute.get('/photos', (req,res)=>{
    res.send({message:'photos page', data:photos})
})

export default photosRoute;