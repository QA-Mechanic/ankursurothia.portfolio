import React, { useState, useEffect } from 'react';
import './PortfolioSection.css';

export default function PortfolioSection() {
  const [expanded, setExpanded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "python_learning_codebase",
      url: "https://github.com/QA-Mechanic/python_learning_codebase",
      description: "Comprehensive Python learning repository with automation examples",
      tech: ["Python", "Pytest", "Selenium"],
      status: "Active",
      stars: "⭐ 15"
    },
    {
      name: "rest-api-contract-testing",
      url: "https://github.com/QA-Mechanic/rest-api-contract-testing",
      description: "Contract testing framework using Pact for API validation",
      tech: ["JavaScript", "Pact", "Node.js"],
      status: "Completed",
      stars: "⭐ 23"
    },
    {
      name: "takeHomeCalculator",
      url: "https://github.com/QA-Mechanic/takeHomeCalculator",
      description: "Take-home salary calculator with comprehensive tax calculations",
      tech: ["JavaScript", "React", "CSS"],
      status: "Active",
      stars: "⭐ 8"
    },
    {
      name: "python_learning",
      url: "https://github.com/QA-Mechanic/python_leraning",
      description: "Advanced Python concepts and automation practices",
      tech: ["Python", "Docker", "CI/CD"],
      status: "In Progress",
      stars: "⭐ 12"
    },
    {
      name: "RestAssured_Java_Framework",
      url: "https://github.com/QA-Mechanic/RestAssured_Java_Framework",
      description: "Complete API testing framework with RestAssured and TestNG",
      tech: ["Java", "RestAssured", "TestNG", "Maven"],
      status: "Completed",
      stars: "⭐ 31"
    }
  ];

  return (
    <div className="portfolio-section">
      <div className="section-header" onClick={() => setExpanded(!expanded)}>
        <div className="header-content">
          <div className="icon-wrapper">
            <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>
              {expanded ? "▼" : "▶"}
            </span>
            <div className="portfolio-icon">🚀</div>
          </div>
          <h2 className="section-title">
            Technical Portfolio
            <span className="project-count">({projects.length} Projects)</span>
          </h2>
        </div>
        <div className="header-glow"></div>
      </div>

      <div className={`content-container ${expanded ? 'expanded' : ''}`}>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div 
              key={project.name}
              className={`project-card ${hoveredProject === idx ? 'hovered' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="card-header">
                <div className="project-status-wrapper">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <span className="stars-count">{project.stars}</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="project-name">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.name}
                    <span className="external-icon">↗</span>
                  </a>
                </h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="card-footer">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <span className="github-icon">⚡</span>
                  View on GitHub
                </a>
              </div>
              
              <div className="card-glow"></div>
              <div className="card-border-gradient"></div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-footer">
          <p className="footer-text">More projects available on GitHub</p>
          <a 
            href="https://github.com/QA-Mechanic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            <span>View All Repositories</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
