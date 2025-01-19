import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Your existing HomePage component
import Navbar from "./components/Navbar"; // Navbar component
import Account from "./Account"; // Create this page as needed
import History from "./History"; // Create this page as needed

function App() {
  return (
    <Router>
      {/* The Navbar will be at the top of every page */}
      <Navbar />

      {/* The rest of the app content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
