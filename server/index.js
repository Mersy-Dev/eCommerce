const express = require("express");
const colors = require('colors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")

const dotenv = require('dotenv').config();



const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");





const connectDB = require('./config/db');




app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.json({limit: "10mb"}));
app.use(cors({origin:"*"}))


app.use("/user", userRoutes);
app.use("/product", productRoutes);




connectDB();


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is working on ${port}`))