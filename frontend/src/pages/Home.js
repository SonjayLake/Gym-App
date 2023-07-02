import { useEffect, useState } from "react";
import axios from "axios";
import WorkoutTemplate from "../components/WorkoutTemplate";

function Home() {
  const [workouts, setWorkout] = useState(null);

  useEffect(() => {
    let getWorkouts = async () => {
      await axios
        .get("/api/workouts")
        .then((res) => {
          setWorkout(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getWorkouts();
  }, []);
  return (
    <div className="home">
      {workouts &&
        workouts.map((e) => {
          return <WorkoutTemplate key={e._id} workout={e} />;
        })}
    </div>
  );
}

export default Home;
