import axios from "axios";
import { useState } from "react";

function WorkoutForm() {
  let [title, setTitle] = useState("");
  let [reps, setReps] = useState("");
  let [load, setLoad] = useState("");
  let [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    let config = {
      data: {
        title: title,
        reps: reps,
        load: load,
      },
    };

    let response = await axios
      .post("/api/workouts", { title, reps, load })
      .then((res) => {
        setTitle("");
        setReps("");
        setLoad("");
        setError(null);
        console.log("success");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }
  return (
    <form
      className="workout-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h4>Add a new workout</h4>
      <label htmlFor="title">Exercise name:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <label htmlFor="reps">Reps:</label>
      <input
        type="number"
        id="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      ></input>

      <label htmlFor="load">Load (lbs):</label>
      <input
        type="number"
        id="load"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      ></input>
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
