const express = require("express");
const {
  createEventController,
  updateEventController,
  deleteEventController,
  updateEventStatus,
  getAllEvents,
  getEventById,
} = require("../controllers/event.controller");
const { isAuth, isAdmin } = require("../middlewares/isAuth.middleware");
const upload = require("../middlewares/multer");

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventById);

eventRouter.post(
  "/",
  isAuth,
  upload.single("poster"),
  isAdmin,
  createEventController,
);
eventRouter.put("/:id", isAuth, isAdmin, updateEventController);
eventRouter.delete("/:id", isAuth, isAdmin, deleteEventController);
eventRouter.patch("/:id/status", isAuth, isAdmin, updateEventStatus);

module.exports = eventRouter;
