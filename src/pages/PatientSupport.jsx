import "./PatientSupport.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function PatientSupport({ setShowFAQ }) {
   const [formData, setFormData] = useState({
  name: "",
  age: "",
  phone: "",
  concern: "",
  description: "",
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
Patient: ${formData.name}

Age: ${formData.age}

Concern: ${formData.concern}

Auto Summary:
Patient reported ${formData.concern.toLowerCase()} and requested support assistance.
`);
setFormData({
  name: "",
  age: "",
  phone: "",
  concern: "",
  description: "",
});
}


  return (
    <>
     <Navbar setShowFAQ={setShowFAQ} />
    <div className="patient-support-page">
      <div className="patient-support-container">

        <h1>Patient Support Request</h1>

<p>
  Need assistance? Fill out the form below and our
  support team will review your request.
</p>

<form className="patient-form" onSubmit={handleSubmit}>

  <input
    type="text"
    name="name"
    placeholder="Patient Name"
    value={formData.name}
    onChange={handleChange}
  />

  <input
    type="number"
    name="age"
    placeholder="Age"
    value={formData.age}
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
  name="concern"
  placeholder="Health Concern"
  value={formData.concern}
  onChange={handleChange}
/>

<textarea
  name="description"
  placeholder="Describe your issue"
  value={formData.description}
  onChange={handleChange}
/>
<button type="submit" className="submit-btn">
  Submit Request
</button>

</form>
{summary && (
  <div className="summary-card">
    <h3>Request Submitted Successfully</h3>
    <p>{summary}</p>
  </div>
)}

      </div>
       
    </div>
    <Footer />
    
  </>);
}

export default PatientSupport;