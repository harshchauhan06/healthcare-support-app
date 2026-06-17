import "./PatientSupport.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Contact({ setShowFAQ }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [summary, setSummary] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSummary(`
Message Sent Successfully

Name: ${formData.name}

Email: ${formData.email}

Auto Response:
Thank you for contacting us. Your message has been received and our support team will get back to you shortly.
`);
 setFormData({
    name: "",
    email: "",
    message: "",
  });
  }

  return (
    <>
      <Navbar setShowFAQ={setShowFAQ} />

      <div className="patient-support-page">
        <div className="patient-support-container">

          <h1>Contact Us</h1>

          <p>
            Have questions or need assistance?
            Send us a message and we'll respond as soon as possible.
          </p>

          <form className="patient-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" className="submit-btn">
              Send Message
            </button>

          </form>

          {summary && (
            <div className="summary-card">
              <h3>Message Sent</h3>
              <p>{summary}</p>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;