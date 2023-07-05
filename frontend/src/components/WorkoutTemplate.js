import axios from "axios";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

function WorkoutTemplate({ workout }) {
  let { dispatch } = useWorkoutContext();
  let { title, reps, load, createdAt } = workout;
  let { user } = useAuthContext();

  async function handleClick() {
    let config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    await axios
      .delete(`/api/workouts/` + workout._id,config)
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
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
}

export default WorkoutTemplate;
