import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  let logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //dispatch logout
    dispatch({ type: "LOGOUT" });
  };

  return logout;
};
