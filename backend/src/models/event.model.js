const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    prizes: {
      type: String,
    },
    eligibility: {
      type: String,
    },
    entryFee: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",
    },

    poster: {
      type: String,
      required: true,
    },
    poster_public_id: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const eventModel = mongoose.model("events", eventSchema);

module.exports = eventModel;
