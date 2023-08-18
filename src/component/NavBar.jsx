import { Link } from "react-router-dom";
import "../style/Navbar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Home">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/add">
          add
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
