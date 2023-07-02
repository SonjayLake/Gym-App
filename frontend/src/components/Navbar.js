import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">Workout App</Link>
      </div>
    </header>
  );
}

export default Navbar;
