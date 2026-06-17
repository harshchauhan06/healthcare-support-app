import { Link } from "react-router-dom";

function Navbar({ setShowFAQ }) {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <h2>🏥 HealthCare Portal</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/patient-support">Patient Support</Link>
        <Link to="/volunteer-registration">Volunteer</Link>
        <Link to="/contact">Contact</Link>
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