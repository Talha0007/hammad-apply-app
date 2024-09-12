import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ApplicationPage from "./pages/ApplicationPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        {/* The Header will be the same across all routes */}
        <Header
          navLinks={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Content to Promote", path: "/content" },
          ]}
        />

        <Routes>
          {/* Route for the main landing page */}
          <Route exact path="/" element={<LandingPage />} />

          {/* Route for the Apply Now form page */}
          <Route path="/applynow" element={<ApplicationPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
