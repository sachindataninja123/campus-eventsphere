const express = require("express");
const userRouter = require("./routes/user.routes");
const cookieparser = require("cookie-parser");
const eventRouter = require("./routes/event.routes");

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server started");
});

app.use("/api/user", userRouter);


app.use("/api/events", eventRouter);

module.exports = app;
