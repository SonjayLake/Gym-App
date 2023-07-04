import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  console.log("AuthContext state: ", state);
  return (
    <AuthContextProvider value={{ ...state, dispatch }}>
      {children}
    </AuthContextProvider>
  );
};

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      return { user: action.payload };
    }
    case "LOGOUT": {
      return { user: null };
    }
    default: {
      return state;
    }
  }
}
