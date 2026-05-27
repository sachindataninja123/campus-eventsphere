const mongoose = require("mongoose");
const config = require("../config/config");

const connectToDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error", error);
    process.exit(1); 
  }
};

module.exports = connectToDB;
