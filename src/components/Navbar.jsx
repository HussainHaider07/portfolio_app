import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">Hussain</Link>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/skills" className="navbar-link">Skills</Link>
          <Link to="/projects" className="navbar-link">Projects</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;