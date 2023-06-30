const Workout = require("../models/workoutModel");

//GET all workout documents
function getWorkouts(req, res, next) {
  res.json({ msg: "All workouts returned" });
  next();
}

//GET a single workout
function getWorkout(req, res, next) {
  res.status(200).json({ msg: "Single workout returned" });
  next();
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
function deleteWorkout(req, res, next) {
  res.status(200).json({ msg: "Single workout deleted" });
  next();
}

//PATCH a single workout
function updateWorkout(req, res, next) {
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
