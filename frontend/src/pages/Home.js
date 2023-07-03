import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useEffect } from "react";
import axios from "axios";

//components
import WorkoutTemplate from "../components/WorkoutTemplate";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  // const [workouts, setWorkout] = useState(null);
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    let getWorkouts = async () => {
      await axios
        .get("/api/workouts")
        .then((res) => {
          dispatch({ type: "SET_WORKOUTS", payload: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getWorkouts();
  }, [dispatch]);
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
