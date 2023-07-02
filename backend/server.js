require("dotenv").config({
  path: "/Users/sonjay/Desktop/projects/netMern/backend/.env",
});

const mongoose = require("mongoose");
const workoutRouter = require("./routes/workouts");
const express = require("express");

app = express();

app.use(express.json());
app.use("/api/workouts", workoutRouter);

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
