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
async function deleteWorkout(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Workout does not exist" });
  }
  await Workout.findByIdAndDelete(id);
  res.status(200).json({ msg: "Workout deleted" });
}

//PATCH a single workout
async function updateWorkout(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Workout does not exist" });
  }

  let updated = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json({ msg: "Workout succesfully updated", updated });
}

module.exports = {
  getWorkouts,
  getWorkout,
  addWorkout,
  deleteWorkout,
  updateWorkout,
};
