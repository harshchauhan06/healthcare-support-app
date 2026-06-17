import heroImage from "../assets/herot.png";
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
  Volunteers & Healthcare
  Support
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
          <Link to="/volunteer-registration">
            <button className="secondary-btn">
              Volunteer
            </button>
          </Link>
        </div>

      </div>

      <div className="hero-image">
        <img className="hero-img" src={heroImage} alt="Healthcare" />
      </div>

    </section>
  );
}

export default Hero;