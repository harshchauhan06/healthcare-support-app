import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import FAQModal from "./components/FAQModal";
import PatientSupport from "./pages/PatientSupport";
import Contact from "./pages/contact";
import VolunteerRegistration from "./pages/volunteerRegistration";
function App() {

  const [showFAQ, setShowFAQ] = useState(false);

  
   return (
  <>
    {showFAQ && (
      <FAQModal setShowFAQ={setShowFAQ} />
    )}

    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Navbar setShowFAQ={setShowFAQ} />
            <Hero />
            <Services />
            <Footer />
          </div>
        }
      />

      <Route
        path="/patient-support"
        element={<PatientSupport />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/volunteer-registration"
        element={<VolunteerRegistration />}
      />
    </Routes>
  </>
);
}

export default App;