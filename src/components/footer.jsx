function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>🏥 Healthcare Portal</h2>

        <p className="footer-description">
          Dedicated to connecting patients, volunteers,
          and healthcare resources through a simple,
          accessible, and compassionate platform.
        </p>

        <div className="footer-stats">

          <div className="footer-item">
            <h3>24/7</h3>
            <p>Support Access</p>
          </div>

          <div className="footer-item">
            <h3>100%</h3>
            <p>Volunteer Driven</p>
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