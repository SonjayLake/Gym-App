import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutsContext";


export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch} = useWorkoutContext();


  let logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //dispatch logout
    dispatch({ type: "LOGOUT" });
    workoutsDispatch({type: "SET_WORKOUTS",payload: null})
  };

  return logout;
};
