const express = require("express");
const { signUp, Login } = require("../controllers/userController");

const userRoutes = express.Router()



userRoutes.post("/signup", signUp);
userRoutes.post("/signin", Login);











module.exports = userRoutes
