import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
function Navbar() {
  let logout = useLogout();
  function handleLogout() {
    logout();
  }
  return (
    <header>
      <div className="container">
        <Link to="/">Workout App</Link>
        <nav>
          <div>
            <button onClick={handleLogout}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
