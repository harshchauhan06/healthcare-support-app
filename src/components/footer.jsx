import hospitalIcon from "../assets/hospital.svg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2><img className="footer-icon" src={hospitalIcon} alt="Hospital Icon" /> Healix</h2>

        <p className="footer-description">
          Dedicated to connecting patients, volunteers,
          and healthcare resources through a simple,
          accessible, and compassionate platform.
        </p>

        <div className="footer-stats">

          <div className="footer-item">
            <h3>Easy</h3>
<p>Access to Help</p>
          </div>

          <div className="footer-item">
            <h3>Community</h3>
<p>Volunteer Support</p>
          </div>

          <div className="footer-item">
            <h3>3</h3>
            <p>Support Services</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Healthcare Support Portal | Built with React
      </div>

    </footer>
  );
}

export default Footer;