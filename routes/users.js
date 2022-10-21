const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/session");
const validator = require("../validators/users")

router
    .get("/", authMiddleware, userController.getUsers)
    .get("/:id", validator.validatorGetUser, userController.getUser)
    .post("/", validator.validatorCreateUser, userController.createUser)
    .put("/:id", validator.validatorCreateUser,
        validator.validatorGetUser, 
        userController.updateUser)
    .delete("/:id", validator.validatorGetUser, userController.deleteUser)


module.exports = router;