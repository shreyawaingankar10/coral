import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/HomePage.css";
import Video from "../assets/ocean2.mp4";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <video src={Video} autoPlay loop muted className="video" />

      {/* Dark Overlay for better text visibility */}
      <div className="overlay"></div>

      <div className="content">
        <h1>Coral Assessment</h1>
        <p>Analyze the health of coral reefs with AI</p>
        <button className="cta-button" onClick={() => navigate("/upload")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
