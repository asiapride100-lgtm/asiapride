import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero-wrapper position-relative">
      <div className="hero-background" />

      <div className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="hero-title">Asia The Uprising</h1>
        <p className="hero-subtitle fw-light">Growtopia Private Server</p>
        <p className="hero-desc fw-light">
          Experience the gameplay with our exclusive features like ghost
          catching, fishing, surgery, Carnival and countless unique features.
        </p>

        <div className="hero-buttons mt-3 d-flex justify-content-center">
          <a href="#Guide" className="btn-gradient">Play Now</a>
          <a href="#Features" className="btn-outline-gradient btn-out">
            Check Feature
          </a>
        </div>
      </div>
    </div>
  );
};


export default Hero;
