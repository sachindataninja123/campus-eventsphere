const express = require("express");
const userModel = require("../models/user.model");
const generateToken = require("../utils/generateToken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, role, department, college } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const newUser = await userModel.create({
      name,
      email,
      password,
      role,
      department,
      college,
    });

    const safeUser = await userModel.findById(newUser._id).select("-password");

    return res.status(201).json({
      message: "user registered successfully",
      success: true,
      safeUser,
    });
  } catch (error) {
    console.error("Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email & password required!",
        success: false,
      });
    }

    const existUser = await userModel.findOne({ email }).select("+password");
    if (!existUser) {
      return res.status(400).json({
        message: "User does not Exist",
        success: false,
      });
    }

    const isValidUser = await existUser.comparePassword(password);

    if (!isValidUser) {
      return res.status(400).json({
        message: "Invalid email & password",
        success: false,
      });
    }

    const safeUser = await userModel
      .findById(existUser._id)
      .select("-password");

    const token = generateToken(existUser._id, existUser.role);

    res.cookie("token", token, {
      httpOnly: true, // JS cannot access it — blocks XSS
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict", // blocks CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return res.status(200).json({
      message: "User login successfully",
      success: true,
      safeUser,
    });
  } catch (error) {
    console.error("Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getmeController = async (req, res) => {
  try {
    return res.status(200).json({
      message: "User fetched successfully",
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.error("Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const logoutController = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { registerController, loginController, getmeController , logoutController};
