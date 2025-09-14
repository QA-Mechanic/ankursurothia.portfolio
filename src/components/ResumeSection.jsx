import React, { useState } from 'react';
import './ResumeSection.css';

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'skills', label: 'Skills', icon: '⚡' }
  ];

  const experiences = [
    {
      title: "Senior QA Automation Engineer",
      company: "XYZ Corp",
      period: "2021–Present",
      location: "London, UK",
      achievements: [
        "Built scalable automation frameworks with Selenium & RestAssured",
        "Led API contract testing and CI/CD integration",
        "Mentored junior testers and improved test coverage by 40%",
        "Implemented Playwright framework reducing test execution time by 60%"
      ],
      technologies: ["Java", "Python", "Selenium", "Playwright", "Docker"]
    },
    {
      title: "QA Analyst",
      company: "ABC Solutions",
      period: "2018–2021",
      location: "London, UK",
      achievements: [
        "Automated UI tests with Cypress and Playwright",
        "Worked closely with development teams to ensure quality releases",
        "Established testing standards and best practices",
        "Reduced manual testing effort by 70% through automation"
      ],
      technologies: ["JavaScript", "Cypress", "TestNG", "Jenkins"]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript"],
    "Testing Frameworks": ["Selenium", "RestAssured", "Cypress", "Playwright", "TestNG", "Pytest"],
    "DevOps & CI/CD": ["Docker", "GitHub Actions", "Jenkins", "AWS", "Kubernetes"],
    "API Testing": ["Postman", "RestAssured", "Pact", "Contract Testing"],
    "Database": ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools & Others": ["Git", "JIRA", "Maven", "Gradle", "IntelliJ IDEA"]
  };

  return (
    <div className="resume-section">
      <div className="section-header">
        <h1 className="resume-title">
          <span className="title-icon">📄</span>
          Professional Resume
        </h1>
        <div className="download-hint">Click tabs to explore different sections</div>
      </div>

      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="content-area">
        {activeTab === 'experience' && (
          <div className="tab-content experience-content">
            <h2 className="content-title">Professional Experience</h2>
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    <div className="marker-line"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h3 className="job-title">{exp.title}</h3>
                      <div className="job-meta">
                        <span className="company">{exp.company}</span>
                        <span className="period">{exp.period}</span>
                        <span className="location">{exp.location}</span>
                      </div>
                    </div>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="achievement-item">
                          <span className="bullet">▶</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="technologies-used">
                      <span className="tech-label">Technologies:</span>
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="tab-content education-content">
            <h2 className="content-title">Education</h2>
            <div className="education-item">
              <div className="degree-icon">🎓</div>
              <div className="education-details">
                <h3 className="degree-title">B.Tech, Computer Science</h3>
                <p className="university">University of Rajasthan</p>
                <p className="graduation-year">2017</p>
                <div className="education-highlights">
                  <span className="highlight">Software Engineering Focus</span>
                  <span className="highlight">Database Systems</span>
                  <span className="highlight">Algorithms & Data Structures</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="tab-content certifications-content">
            <h2 className="content-title">Certifications</h2>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="cert-icon">🏆</div>
                <h3 className="cert-title">ISTQB Certified Tester</h3>
                <p className="cert-issuer">International Software Testing Qualifications Board</p>
                <span className="cert-year">2020</span>
              </div>
              <div className="certification-card">
                <div className="cert-icon">🔧</div>
                <h3 className="cert-title">Certified Selenium Professional</h3>
                <p className="cert-issuer">Selenium Academy</p>
                <span className="cert-year">2019</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="tab-content skills-content">
            <h2 className="content-title">Technical Skills</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h3 className="category-title">{category}</h3>
                  <div className="skills-list">
                    {skillList.map((skill, skillIdx) => (
                      <span key={skillIdx} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
