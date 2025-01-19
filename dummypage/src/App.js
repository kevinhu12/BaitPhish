import React from "react";
import Image from "./rickroll.gif";
import "./CenteredPage.css"; // Import the CSS file

const App = () => {
  return (
    <div className="centered-container">
      {/* Image */}
      <img
        src={Image} // Use the imported image
        alt="Centered Example"
        className="centered-image"
      />

      {/* Text */}
      <p className="centered-text">
        You just got rickrolled. Be more attentive when clicking on possible phishing links.
      </p>
    </div>
  );
};

export default App;
