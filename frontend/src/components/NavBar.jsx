import { Link } from "react-router-dom";
import "../css/NavBar.css";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img id="logo" src={logo} alt="Logo"/>
          <p>SukiTV</p>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
