const jwt = require("jsonwebtoken");
const config = require("../config/config");
const userModel = require("../models/user.model");

const isAuth = async (req, res, next) => {
  try {
   
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token is missing",
        success: false,
      });
    }

    
    const decoded = jwt.verify(token, config.JWT_SECRET);

    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User no longer exists",
        success: false,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("isAuth middleware error:", error.message);

    // Handle specific JWT errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Session expired, please login again",
        success: false,
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = isAuth;
