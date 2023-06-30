require("dotenv").config({
  path: "/Users/sonjay/Desktop/projects/netMern/backend/.env",
});
const workoutRouter = require("./routes/workouts");
const express = require("express");

app = express();

app.use(express.json());
app.use("/api/workouts", workoutRouter);

app.listen(4000, () => {
  console.log("listening on server", process.env.PORT);
});
