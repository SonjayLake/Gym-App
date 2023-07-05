import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import WorkoutTemplate from "../components/WorkoutTemplate";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  // const [workouts, setWorkout] = useState(null);
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();
  useEffect(() => {
    let getWorkouts = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
      await axios
        .get("/api/workouts",config)
        .then((res) => {
          dispatch({ type: "SET_WORKOUTS", payload: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    };
    if (user) {
      getWorkouts();
    }
  }, [dispatch, workouts, user]);
  return (
    <div className="home">
      {workouts &&
        workouts.map((e) => {
          return <WorkoutTemplate key={e._id} workout={e} />;
        })}
      <WorkoutForm />
    </div>
  );
}

export default Home;
