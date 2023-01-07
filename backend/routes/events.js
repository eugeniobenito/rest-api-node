const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const { authMiddleware } = require("../middlewares/session");

router
    .get("/", eventController.getEvents)
    .post("/", eventController.createEvent)
    .delete("/:id", eventController.deleteEvent)
    .put("/:id", eventController.updateEvent)

module.exports = router;