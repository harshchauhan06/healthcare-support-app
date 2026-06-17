import { Link } from "react-router-dom";

function Navbar({ setShowFAQ }) {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <h2>🏥 HealthCare Portal</h2>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Patient Support</a>
        <a href="#">Volunteer</a>
        <a href="#">Contact</a>
      </div>

      <button
        className="nav-btn"
        onClick={() => setShowFAQ(true)}
      >
        Get Help
      </button>
    </nav>
  );
}

export default Navbar;