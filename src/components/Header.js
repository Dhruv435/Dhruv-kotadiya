import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scrolling function with fallback
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const prefersSmoothScroll = "scrollBehavior" in document.documentElement.style;

    if (prefersSmoothScroll) {
      // Use native smooth scrolling if supported
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: Custom smooth scrolling using requestAnimationFrame
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start = null;

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

      const animateScroll = (timestamp) => {
        if (!start) start = timestamp;
        const elapsedTime = timestamp - start;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = easeInOutQuad(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }

    setIsOpen(false); // Close menu after clicking (for mobile view)
  };

  return (
    <>
      {/* Hamburger Button (☰) - Shows Only When Sidebar is Closed */}
      {!isOpen && (
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      )}

      {/* Sidebar Menu */}
      <header className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Close Button (✖) */}
        <button className="close-btn" onClick={toggleMenu}>
          ✖
        </button>

        {/* Profile Section */}
        <div className="profile">
          <img src="/profile.jpeg" alt="Dhruv Kotadiya" className="profile-pic" />
          <h3>Dhruv Kotadiya</h3>
          <p>WEB DEVELOPER</p>
        </div>

        {/* Navigation Buttons */}
        <nav>
          <button onClick={() => scrollToSection("profile")}>Profile</button>
          <button onClick={() => scrollToSection("education")}>Education</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("experience")}>Work Experience</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("cv")}>CV</button>
          <button onClick={() => window.location.href = "mailto:dhruvkotadiya088@gmail.com"}>Hire Me</button>
        </nav>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dhruv-kotadiya-52136326a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Dhruv435" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:dhruvkotadiya088@gmail.com">Gmail</a>
        </div>
      </header>
    </>
  );
};

export default Header;
