import axios from "axios";
import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  let { dispatch } = useWorkoutContext();

  let [title, setTitle] = useState("");
  let [reps, setReps] = useState("");
  let [load, setLoad] = useState("");
  let [error, setError] = useState(null);
  let [emptyFields, setEmptyFields] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();

    let response = await axios
      .post("/api/workouts", { title, reps, load })
      .then((res) => {
        setTitle("");
        setReps("");
        setLoad("");
        dispatch({ type: "CREATE_WORKOUTS", payload: res.data });
        setError(null);
        setEmptyFields([]);
        console.log("success");
      })
      .catch((err) => {
        setError(err.response.data.error + err.response.data.emptyFields);
        setEmptyFields(err.response.data.emptyFields);
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
        className={emptyFields.includes("Title") ? "required" : ""}
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <label htmlFor="reps">Reps:</label>
      <input
        type="number"
        id="reps"
        value={reps}
        className={emptyFields.includes(" Reps") ? "required" : ""}
        onChange={(e) => setReps(e.target.value)}
      ></input>

      <label htmlFor="load">Load (lbs):</label>
      <input
        type="number"
        id="load"
        value={load}
        className={emptyFields.includes(" Load") ? "required" : ""}
        onChange={(e) => setLoad(e.target.value)}
      ></input>
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
