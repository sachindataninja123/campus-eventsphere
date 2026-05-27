const express = require("express");
const userRouter = require("./routes/user.routes");
const cookieparser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieparser());

app.get("/", (req, res) => {
  res.send("server started");
});

app.use("/api/user", userRouter);

module.exports = app;
