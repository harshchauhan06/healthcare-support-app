import { useState } from "react";

function FAQModal({ setShowFAQ }) {
  const [answer, setAnswer] = useState("");

  const faqData = {
    "How can I get patient support?":
      "Open the Patient Support form and submit your healthcare concern. Our team will review your request and respond as soon as possible.",

    "How do I become a volunteer?":
      "Fill out the Volunteer Registration form with your details, skills, and availability.",

    "How can I contact support?":
      "Use the Contact Form available on the website. We typically respond within 24 hours.",

    "Is this service free?":
      "Yes, all support services provided through this portal are completely free.",

    "How long does it take to receive a response?":
      "Most requests are reviewed within 24 hours of submission.",

    "What information should I provide in the Patient Support form?":
      "Please provide your name, contact information, and a clear description of your healthcare concern.",

    "Can I update my volunteer information later?":
      "Yes, you can submit a new registration request with updated details.",

    "Who can register as a volunteer?":
      "Anyone willing to contribute their time and skills to support healthcare initiatives may apply.",

    "Are my personal details secure?":
      "Yes, your submitted information is used only for support and communication purposes.",

    "What should I do in a medical emergency?":
      "This platform is not intended for emergencies. Please contact your local emergency services immediately."
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2 className="modal-title">
          FAQ Assistant
        </h2>

        <p className="modal-subtitle">
          Select a question to receive an automated response.
        </p>

        <div className="faq-buttons">
         <div className="faq-list">
  {Object.keys(faqData).map((question) => (
    <button
      className="faq-question"
      key={question}
      onClick={() => setAnswer(faqData[question])}
    >
      {question}
    </button>
  ))}
</div>
        </div>

        {answer && (
          <div className="answer">
            <h4>Answer</h4>
            <p>{answer}</p>
          </div>
        )}

        <button
          className="close-btn"
          onClick={() => setShowFAQ(false)}
        >
          Close Assistant
        </button>

      </div>
    </div>
  );
}

export default FAQModal;