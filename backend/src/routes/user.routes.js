const express = require("express");
const {
  registerController,
  loginController,
  getmeController,
  logoutController,
  uploadProfilePicController,
  removeProfilePicController,
} = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/isAuth.middleware");
const upload = require("../middlewares/multer");

const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/profile", isAuth, getmeController);
userRouter.post("/logout", isAuth, logoutController);
userRouter.put(
  "/profile-picture",
  isAuth,
  upload.single("profilePic"),
  uploadProfilePicController,
);
userRouter.delete("/profile-picture", isAuth, removeProfilePicController);

module.exports = userRouter;
