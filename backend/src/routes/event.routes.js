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
  "/create",
  isAuth,
  upload.single("poster"),
  createEventController,
);

eventRouter.put(
  "/update/:id",
  isAuth,
  upload.single("poster"),
  updateEventController,
);
eventRouter.delete("/:id", isAuth, isAdmin, deleteEventController);
eventRouter.patch("/:id/status", isAuth, isAdmin, updateEventStatus);

module.exports = eventRouter;
