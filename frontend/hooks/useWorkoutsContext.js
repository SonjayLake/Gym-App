import { WorkoutContext } from "../src/context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "useWorkoutcontext must be used inside of a WorkoutContextProvider"
    );
  }

  return context;
};
