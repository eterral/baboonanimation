import { Link } from "react-router-dom";
import logo from "../../Assets/WEBSITE_Logo_BABOON_Horizontal_TEMP_KT_051822.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} className="nav-logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/work" style={{ textDecoration: "none", color: "black" }}>
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/diversity"
            style={{ textDecoration: "none", color: "black" }}
          >
            Diversity
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/voices" style={{ textDecoration: "none", color: "black" }}>
            Voices
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/clients"
            style={{ textDecoration: "none", color: "black" }}
          >
            Clients
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
