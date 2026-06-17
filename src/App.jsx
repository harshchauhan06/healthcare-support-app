import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import FAQModal from "./components/FAQModal";
function App() {

  const [showFAQ, setShowFAQ] = useState(false);

  
   return (
    <div className="App">
    <Navbar setShowFAQ={setShowFAQ} />
         {showFAQ && (
             <FAQModal setShowFAQ={setShowFAQ} />
                  )}

    <Hero />
    <Services />
    <Footer />
  </div>

   );
}

export default App;