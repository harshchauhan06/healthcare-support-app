import { Link } from "react-router-dom";
import clipboard from "../assets/clipboard.svg";
import contactIcon from "../assets/telephone-inbound-fill.svg";
import volunteerIcon from "../assets/volunteer.png";

function Services() {
  return (
    <section className="services">

      <div className="services-header">
        <p className="services-tag">
  SUPPORT SERVICES
</p>
         
        <h2>How We Can Help</h2>
      </div>

      <div className="services-grid">

        <Link to="/patient-support" className="service-card">
         
          
          <img className="service-icon" src={clipboard} alt="Clipboard Icon" />
          <h3>Patient Support</h3>
          <p>
            Submit healthcare concerns and
            request assistance.
          </p>
        </Link>

        <Link to="/volunteer-registration" className="service-card">
           
          <img className="service-icon_s" src={volunteerIcon} alt="Volunteer Icon" />
          <h3>Volunteer Registration</h3>
          <p>
            Join our volunteer network and
            help those in need.
          </p>
        </Link>

        <Link to="/contact" className="service-card">
          
          <img className="service-icon" src={contactIcon} alt="Contact Icon" />
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