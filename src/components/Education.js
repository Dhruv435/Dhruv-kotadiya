import React, { useEffect, useState } from "react";
import "./Education.css";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".education-container");
      if (section) {
        const rect = section.getBoundingClientRect();

        // Show animation when section enters viewport
        if (rect.top < window.innerHeight * 0) {
          setIsVisible(true);
        }

        // Detect scrolling and remove animation
        setIsScrolling(true);
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 200); // Stops detecting scroll after 200ms
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`education-container ${isVisible ? "show" : ""} ${isScrolling ? "no-animation" : ""}`}>
      
      <h2>Education</h2>
      
      <div className="education-details">
        <div className={`education-item ${isVisible ? "slide-in" : ""}`}>
        <h2 className="education-bg">Qualification</h2>
          <h3>Bachelor of Technology (Computer Engineering)</h3>
          <p>Marwadi University (NAAC A+)</p>
        </div>
        <div className={`education-item ${isVisible ? "slide-in" : ""}`}>
          <h3>Higher Secondary Education</h3>
          <p>Ambika Vidhyalaya – March 2022</p>
        </div>
        <div className={`education-item ${isVisible ? "slide-in" : ""}`}>
          <h3>SSC</h3>
          <p>Pathak Vidhyalaya – March 2020</p>
          <h2 className="skills-bg">Skills</h2>
        </div>
      </div>
    </div>
  );
};

export default Education;
