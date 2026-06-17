import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="services">

      <div className="services-header">
         
        <h2>Our Services</h2>
      </div>

      <div className="services-grid">

        <Link to="/patient-support" className="service-card">
          <div className="service-icon">🩺</div>
          <h3>Patient Support</h3>
          <p>
            Submit healthcare concerns and
            request assistance.
          </p>
        </Link>

        <Link to="/volunteer-registration" className="service-card">
          <div className="service-icon">🤝</div>
          <h3>Volunteer Registration</h3>
          <p>
            Join our volunteer network and
            help those in need.
          </p>
        </Link>

        <Link to="/contact" className="service-card">
          <div className="service-icon">📞</div>
          <h3>Contact Us</h3>
          <p>
            Reach out for support,
            questions, or feedback.
          </p>
        </Link>

      </div>

    </section>
  );
}

export default Services;