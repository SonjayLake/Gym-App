import { createContext } from "react";
import { useReducer } from "react";
export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  //dispatch({type: ? , payload: [{data},{data}])
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
//action : tag, payload
//state reliable state
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS": {
      return {
        workouts: action.payload,
      };
    }

    case "CREATE_WORKOUTS": {
      return {
        workouts: [action.payload, ...state.workouts],
      };
    }

    default: {
      return {
        state,
      };
    }
  }
};
