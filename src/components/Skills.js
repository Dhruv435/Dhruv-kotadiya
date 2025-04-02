import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      
      <div className="skills-grid">
        
        <div className="skill-card">
        
          <h3>Front-End Development</h3>
          
          <p>HTML5<br /> Tailwind CSS <br />JavaScript<br /> React.js</p>
        </div>
        <div className="skill-card">
          <h3>Database</h3>
          <p>MongoDB<br />My Sql</p>
        </div>
        <div className="skill-card">
          <h3>UI/UX Design</h3>
          <p>Figma<br /> Responsive Web Design</p>
        </div>
        <div className="skill-card">
          <h3>Tools & Workflow</h3>
          <p>Git<br /> GitHub<br /> REST APIs</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
