import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className="experience-list">

        <div className="experience-card">
          <h3>Web Development Internship - Corizo</h3><h2 className="experience-bg">Experience</h2>
          <p>(2022)</p>
          <p>Gained expertise in React.js and MongoDB, building scalable web apps.</p>
          <p>Developed a React-based project applying industry best practices.</p>
        </div>

        <div className="experience-card">
          <h3>Freelance Web Developer</h3>
          <p>(Ongoing)</p>
          <p>Designed custom business websites with a focus on UI/UX and responsiveness.</p>
          <p>Built SEO-friendly and high-performance web applications. </p>
          <h2 className="project-bg">Project</h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
