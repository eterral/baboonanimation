import { NavLink } from "react-router-dom";
import logo from "../../Assets/WEBSITE_Logo_BABOON_Horizontal_TEMP_KT_051822.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <img src={logo} className="nav-logo" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink
            to="/work"
            style={{ textDecoration: "none", color: "black" }}
          >
            Work
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            style={{ textDecoration: "none", color: "black" }}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/diversity"
            style={{ textDecoration: "none", color: "black" }}
          >
            Diversity
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/voices"
            style={{ textDecoration: "none", color: "black" }}
          >
            Voices
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/clients"
            style={{ textDecoration: "none", color: "black" }}
          >
            Clients
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
