const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

//GET all workout documents
router.get("/", (req, res, next) => {
  res.json({ msg: "All workouts returned" });
  next();
});

//GET a single workout
router.get("/:id", (req, res, next) => {
  res.status(200).json({ msg: "Single workout returned" });
  next();
});

//POST a new workout document
router.post("/", (req, res, next) => {
  let { title, reps, load } = req.body;
  try {
    let newWorkout = Workout({ title, reps, load });
    res.status(201).json(newWorkout);
  } catch (err) {
    console.error(err);
    res.status(400).json({ msg: err.message });
  }
});

//DELETE a single workout
router.delete("/:id", (req, res, next) => {
  res.status(200).json({ msg: "Single workout deleted" });
  next();
});

//PATCH a single workout
router.patch("/:id", (req, res, next) => {
  res.status(200).json({ msg: "Single workout updated" });
  next();
});
module.exports = router;
