import React from "react";
import "./styles/ProjectCard.css"; // Ensure the correct path

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} />
      </a>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
