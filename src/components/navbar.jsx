import { Link } from "react-router-dom";
import logo from "../assets/hospital.svg";
import { useState } from "react";

function Navbar({ setShowFAQ }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-section">
  <img className="logo" src={logo} alt="Hospital Logo" />
  <h2>Healix</h2>
</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/patient-support">Patient Support</Link>
          <Link to="/volunteer-registration">Volunteer</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <button
          className="nav-btn"
          onClick={() => setShowFAQ && setShowFAQ(true)}
        >
          Get Help
        </button>
      </nav>

      {menuOpen && (
  <div className="mobile-menu">
    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    <Link
      to="/patient-support"
      onClick={() => setMenuOpen(false)}
    >
      Patient Support
    </Link>

    <Link
      to="/volunteer-registration"
      onClick={() => setMenuOpen(false)}
    >
      Volunteer
    </Link>

    <Link
      to="/contact"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </Link>

    <button
      className="mobile-help-btn"
      onClick={() => {
        setShowFAQ && setShowFAQ(true);
        setMenuOpen(false);
      }}
    >
      Get Help
    </button>
  </div>
)}
    </>
  );
}

export default Navbar;