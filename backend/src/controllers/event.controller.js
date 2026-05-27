const eventModel = require("../models/event.model");

const createEventController = async (req, res) => {
  try {
    const {
      name,
      description,
      date,
      time,
      category,
      college,
      location,
      prizes,
      eligibility,
      entryFee,
    } = req.body;

    if (
      !name ||
      !description ||
      !date ||
      !time ||
      !category ||
      !college ||
      !location
    ) {
      return res.status(400).json({
        message: "All fields are required!",
        success: false,
      });
    }

    const event = await eventModel.create({
      name,
      description,
      date,
      time,
      category,
      college,
      location,
      prizes,
      eligibility,
      entryFee,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Event created successfully",
      success: true,
      event,
    });
  } catch (error) {
    console.error("createEvent error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateEventController = async (req, res) => {
  try {
    const event = await eventModel.findById(req.params.id);

    if (!event) {
      return res.status(400).json({
        message: "Event not found",
        success: false,
      });
    }

    if (event.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to update this event",
      });
    }

    const updateEvent = await eventModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body, poster: req.file?.path || event.poster },
      { new: true, runValidators: true },
    );

    return res.status(200).json({
      message: "Event update successfully",
      success: true,
      event: updateEvent,
    });
  } catch (error) {
    console.error("updateEvent error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteEventController = async (req, res) => {
  try {
    const event = await eventModel.findById(req.params.id);

    if (!event) {
      return res.status(400).json({
        success: false,
        message: "Event not found",
      });
    }

    if (event.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this event",
      });
    }

    await eventModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Event deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("deleteEvent error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateEventStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const event = await eventModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Event status updated to ${status}`,
      event,
    });
  } catch (error) {
    console.error("updateEventStatus error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const { category, college, status } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (college) filter.college = college;
    if (status) filter.status = status;

    const events = await eventModel
      .find(filter)
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    console.error("getAllEvents error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await eventModel
      .findById(req.params.id)
      .populate("createdBy", "name email");

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({ success: true, event });
  } catch (error) {
    console.error("getEventById error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createEventController,
  updateEventController,
  deleteEventController,
  updateEventStatus,
  getAllEvents,
  getEventById,
};
