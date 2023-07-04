import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  let logout = useLogout();
  const user = useAuthContext();
  function handleLogout() {
    logout();
  }
  // console.log(user);
  return (
    <header>
      <div className="container">
        <Link to="/">Workout App</Link>
        <nav>
          {user.user && (
            <div>
              <span>{user.user.email}</span>
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}
          {!user.user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
