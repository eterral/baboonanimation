import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/work">
          <p>Work</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/diversity">
          <p>Diversity</p>
        </Link>
        <Link to="/voices">
          <p>Voices</p>
        </Link>
        <Link to="/clients">
          <p>Clients</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}
