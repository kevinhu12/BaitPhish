import React from "react";
import MainImage from "./rickroll.gif";
import "./dummypage.css";

const App = () => {
  return (
    <div className="centered-container">
      <img
        src={MainImage}
        alt="Rickrolled"
        className="centered-image"
      />
      <p className="centered-text">
        You just got rickrolled. Be more attentive when clicking on possible phishing links.
      </p>
    </div>
  );
};

export default App;
