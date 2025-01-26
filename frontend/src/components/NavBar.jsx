import { Link } from "react-router-dom";
import "../css/NavBar.css";
import logo from "../assets/logo.png";
import { useState } from "react";

function NavBar() {
  const [isHome, setIsHome] = useState(true);

  function refreshPage() {
    if (isHome) {
      window.location.reload(false);
    } else {
      setIsHome(true);
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={refreshPage}>
          <img id="logo" src={logo} alt="Logo" />
          <p>SukiTV</p>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link" onClick={refreshPage}>
          Home
        </Link>
        <Link
          to="/favorites"
          className="nav-link"
          onClick={() => setIsHome(false)}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
