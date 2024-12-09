import express from "express";
import comments from "./comments.js";

const commentsRoute = express.Router();

// Define route without /products prefix
commentsRoute.get('/comments', (req, res) => {
    res.status(200).send({ status: 200, message: "success", data: comments });
});

export default commentsRoute;
