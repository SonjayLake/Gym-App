const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//GET all workout documents
async function getWorkouts(req, res) {
  const user_id = req.user._id;

  let all = await Workout.find({user_id}).sort({createdAt: -1});
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
  res.status(200).json(workout);
}

//POST a new workout document
async function addWorkout(req, res, next) {
  let { title, reps, load } = req.body;
  let emptyFields = [];

  try {
    const user_id = req.user._id;
    let newWorkout = await Workout.create({ title, load, reps, user_id });
    res.status(201).json(newWorkout);
  } catch (err) {
    if (!title) {
      emptyFields.push("Title");
    }
    if (!reps) {
      emptyFields.push(" Reps");
    }
    if (!load) {
      emptyFields.push(" Load");
    }
    res.status(400).json({ error: "Please fill in all fields: ", emptyFields });
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
