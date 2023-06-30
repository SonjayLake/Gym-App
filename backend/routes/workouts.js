const express = require("express");

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
  res.status(201).json({ msg: "Single workout added" });
  next();
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
