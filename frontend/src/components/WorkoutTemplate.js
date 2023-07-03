import axios from "axios";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

function WorkoutTemplate({ workout }) {
  let { dispatch } = useWorkoutContext();
  let { title, reps, load, createdAt } = workout;

  async function handleClick() {
    let response = await axios
      .delete(`/api/workouts/` + workout._id)
      .then((res) => {
        dispatch({ type: "DELETE_WORKOUT", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>Load (lbs): {load} </p>
      <p>Reps: {reps}</p>
      <p>{createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
}

export default WorkoutTemplate;
