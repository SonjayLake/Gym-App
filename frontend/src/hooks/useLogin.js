import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    await axios
      .post("/api/user/login", { email, password })
      .then((res) => {
        let { email, token } = res.data;
        localStorage.setItem("user", JSON.stringify({ email, token }));
        setIsLoading(false);

        //update auth context
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.error);
      });
  };
  return { login, isLoading, error };
};
