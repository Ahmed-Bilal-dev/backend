import express from "express";
import comments from "../comments.js";

const productsRoute = express.Router();

// Define route without /products prefix
productsRoute.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: "success", data: comments });
});

export default productsRoute;
