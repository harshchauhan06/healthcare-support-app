import "./PatientSupport.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function VolunteerRegistration({ setShowFAQ }) {

    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  skills: "",
  availability: "",
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
Volunteer Registration Successful

Name: ${formData.name}

Skills: ${formData.skills}

Availability: ${formData.availability}

Auto Summary:
Volunteer registered with ${formData.skills} skills and is available ${formData.availability}.
`);
setFormData({
  name: "",
  email: "",
  phone: "",
  skills: "",
  availability: "",
});
}
  return (
  <>
    <Navbar setShowFAQ={setShowFAQ} />

    <div className="patient-support-page">
      <div className="patient-support-container">

        <h1>Volunteer Registration</h1>

        <p>
          Join our volunteer network and help support
          healthcare initiatives in your community.
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

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <input
            type="text"
            name="availability"
            placeholder="Availability (Weekdays/Weekends)"
            value={formData.availability}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Register as Volunteer
          </button>

        </form>

        {summary && (
          <div className="summary-card">
            <h3>Registration Successful</h3>
            <p>{summary}</p>
          </div>
        )}

      </div>
    </div>
    <Footer />
  </>
);
}

export default VolunteerRegistration;