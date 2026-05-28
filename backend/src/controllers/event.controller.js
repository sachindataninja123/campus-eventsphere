const eventModel = require("../models/event.model");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const config = require("../config/config");

cloudinary.config({
  cloud_name: config.CLOUD_KEY_NAME,
  api_key: config.CLOUD_API_KEY,
  api_secret: config.CLOUD_API_SECRET,
  secure: true,
});

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
      !location ||
      !req.file
    ) {
      return res.status(400).json({
        message: "All fields are required!",
        success: false,
      });
    }

    // Upload poster to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "event-posters",
    });

    // Remove local file
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
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
      poster: result.secure_url,
      poster_public_id: result.public_id,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Event created successfully",
      success: true,
      event,
    });
  } catch (error) {
    console.error("createEvent error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateEventController = async (req, res) => {
  try {
    const event = await eventModel.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
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

    let posterUrl = event.poster;
    let posterPublicId = event.poster_public_id;

    // If new poster uploaded
    if (req.file) {
      // delete old poster from cloudinary
      if (event.poster_public_id) {
        await cloudinary.uploader.destroy(event.poster_public_id);
      }

      // upload new poster
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "event-posters",
      });

      // remove local file
      if (fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }

      posterUrl = result.secure_url;
      posterPublicId = result.public_id;
    }

    const updatedEvent = await eventModel.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        poster: posterUrl,
        poster_public_id: posterPublicId,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      message: "Event updated successfully",
      success: true,
      event: updatedEvent,
    });

  } catch (error) {
    console.error("updateEvent error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
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
