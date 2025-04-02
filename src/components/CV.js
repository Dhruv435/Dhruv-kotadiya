import React from "react";
import "./CV.css";

const CV = () => {
  return (
    
    <div className="cv-container">
      <h2 className="cv-bg">Explore More</h2>
      <h2 className="cv-title">My CV </h2>
      <p className="cv-description"> 
        Click the button below to download my CV and learn more about my professional journey.
      </p>
      <a href="/dhruv_kotadiya.pdf" download="Dhruv_Kotadiya_CV.pdf" className="download-btn">
        Download CV
      </a>
      
    </div>
  );
};

export default CV;
