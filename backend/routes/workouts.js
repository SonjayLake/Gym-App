const express = require("express");
const router = express.Router();
const {
  getWorkout,
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

//GET a single workout
router.get("/:id", getWorkout);

//GET all workout documents
router.get("/", getWorkouts);

//POST a new workout document
router.post("/", addWorkout);

//DELETE a single workout
router.delete("/:id", deleteWorkout);

//PATCH a single workout
router.patch("/:id", updateWorkout);
module.exports = router;
