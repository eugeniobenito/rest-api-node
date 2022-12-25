const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/session");
const roleController = require("../controllers/roleController");

router
    .get("/", roleController.getRoles)
    .get("/:user_email", roleController.getUserRoles)
    .post("/", roleController.addRole)

module.exports = router;