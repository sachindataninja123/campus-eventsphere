const express = require("express");
const {
  registerController,
  loginController,
  getmeController,
  logoutController,
} = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/isAuth.middleware");

const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/profile", isAuth, getmeController);
userRouter.post("/logout", isAuth, logoutController);

module.exports = userRouter;
