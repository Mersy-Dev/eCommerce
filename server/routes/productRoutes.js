const express = require("express");
const { uploadProduct, product } = require("../controllers/productController");

const productRoutes = express.Router()




productRoutes.get("/getproduct", product);
productRoutes.post("/uploadproduct", uploadProduct);












module.exports = productRoutes
