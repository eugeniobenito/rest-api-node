const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const { authMiddleware } = require("../middlewares/session");

router
  .get("/", authMiddleware, eventController.getEvents)
  .post("/", authMiddleware, eventController.createEvent)
  .delete("/:id", authMiddleware, eventController.deleteEvent)
  .put("/:id", authMiddleware, eventController.updateEvent);

module.exports = router;
