import React, { useState } from "react";
import "./Projects.css";
import Zoo from "../assets/zoo.png";
import Ecommerce from "../assets/ecommerce.png";
import Medical from "../assets/medical.png";
import Portfolio from "../assets/portfolio.png";
import Learning from "../assets/learning.png";
import Shoes from "../assets/shoes.png";
import Company from "../assets/company.png";

const projectsData = [
  { title: "Zoo Online Ticket Booking System", image: Zoo, link: "https://dhruv435.github.io/zoo/" },
  { title: "E-commerce Platform", image: Ecommerce, link: "https://dhruv435.github.io/Shopping-Application/" },
  { title: "Medical Template", image: Medical, link: "https://dhruv435.github.io/medical-clinic-template/" },
  { title: "Portfolio Website", image: Portfolio, link: "https://www.linkedin.com/in/dhruv-kotadiya-52136326a/" },
  { title: "Learning Course Template", image: Learning, link: "https://dhruv435.github.io/learn-programming-template/" },
  { title: "Shoes Shopping Cart", image: Shoes, link: "https://dhruv435.github.io/CRUD_APP_MINOR1/" },
  { title: "Company Service Template", image: Company, link: "https://dhruv435.github.io/company-service-template/" }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.slice(0, showAll ? projectsData.length : 3).map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {!showAll && <button onClick={() => setShowAll(true)}>More</button>}
    </div>
  );
};

export default Projects;
