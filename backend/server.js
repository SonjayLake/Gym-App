require("dotenv").config({
  path: "/Users/sonjay/Desktop/projects/netMern/backend/.env",
});

const path = require("path");
const mongoose = require("mongoose");
const workoutRouter = require("./routes/workouts");
const userRouter = require("./routes/user");
const express = require("express");

app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/workouts", workoutRouter);

//server frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("connected to db, listening on server", process.env.PORT);
    })
  )
  .catch((err) => {
    console.log(err);
  });
