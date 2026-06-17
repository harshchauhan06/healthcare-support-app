import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          Healthcare Support Platform
        </p>

        <h1>
          Connecting Patients,
          Volunteers and Care
          Services
        </h1>

        <p className="hero-description">
          A simple platform where patients can seek
          support, volunteers can contribute, and
          everyone can access healthcare resources
          quickly and efficiently.
        </p>

        <div className="hero-buttons">
          <Link to="/patient-support">
                <button className="primary-btn">
                  Patient Support
                </button>
         </Link>

          <button className="secondary-btn">
            Volunteer
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img src="../src/assets/hero1.png" alt="Healthcare" />
      </div>

    </section>
  );
}

export default Hero;