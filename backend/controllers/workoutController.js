const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
//GET all workout documents
async function getWorkouts(req, res) {
  let all = await Workout.find();
  res.status(200).json(all);
}

//GET a single workout
async function getWorkout(req, res) {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such workout" });
  }
  let workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ error: "Invalid Workout Id" });
  }
  console.log(workout);
  res.status(200).json(workout);
}

//POST a new workout document
async function addWorkout(req, res, next) {
  let { title, reps, load } = req.body;
  try {
    let newWorkout = await Workout.create({ title, load, reps });
    res.status(201).json(newWorkout);
  } catch (err) {
    console.error(err);
    res.status(400).json({ msg: err.message });
  }
}

//DELETE a single workout
function deleteWorkout(req, res) {
  res.status(200).json({ msg: "Single workout deleted" });
  next();
}

//PATCH a single workout
function updateWorkout(req, res) {
  res.status(200).json({ msg: "Single workout updated" });
  next();
}

module.exports = {
  getWorkouts,
  getWorkout,
  addWorkout,
  deleteWorkout,
  updateWorkout,
};
