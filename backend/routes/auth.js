const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/authController");
const { validatorCreateUser } = require("../validators/users")
const { validatorLogin } = require("../validators/auth");
const { createUser } = require("../controllers/userController");

router
    .post("/register", validatorCreateUser, createUser)
    .post("/login", validatorLogin, loginController)

module.exports = router;    
