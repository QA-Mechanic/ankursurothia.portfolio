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
      title: "SDET (Software Development Engineer in Test)",
      company: "Thredd",
      period: "May 2024 – Present",
      location: "London, UK",
      achievements: [
        "Developed and maintained automated UI test scripts using Playwright and Python (Behave, Pytest), ensuring robust UI tests coding for micro front-end web applications; utilized WireMock to mock API calls for UI automation",
        "Performed API automation in SaaS microservices architecture using RestAssured (REST APIs) and Java, reducing manual testing time and complexity by 40%. Designed BDD test scenarios with Agile methodology",
        "Conducted contract testing with PACT - PactFlow, reducing time and complexity by 70%",
        "Collaborated with cross-functional teams and product managers to identify user stories, document, and resolve critical defects, enhancing overall product data requirements and quality",
        "Achievement: Debugging of CICD integration with Jira Xray and Slack for better monitoring, automated UAT testcases, and leveraged Docker and Kubernetes to reduce execution time by 30%",
        "Partnered with developers to create story-level test plans, implementing a comprehensive automation strategy across the full testing pyramid (UI, API, integration, contract) to achieve high test coverage",
        "Investigated on-device LLM options and retrieval patterns to enable privacy-preserving self-healing of flaky UI tests; built prompt templates, failure classifiers, and locator repair strategies while keeping sensitive data local"
      ],
      technologies: ["Playwright", "Python", "Behave", "Pytest", "RestAssured", "Java", "PACT", "PactFlow", "WireMock", "Docker", "Kubernetes", "Jira Xray"]
    },
    {
      title: "Lead Test Automation Engineer",
      company: "EBRD via Zensar",
      period: "Aug 2022 – Jan 2024",
      location: "London, UK",
      achievements: [
        "Led an automation testing project for 32+ Java and PB applications, including multiple upgrades to ensure the futureproofing of core banking applications",
        "Mentored and managed a team with a positive attitude to resolve issues in UAT environment and provided guidance and coach others",
        "Collaborated with developers and business users to develop customer-centric test strategy and test cases, test data, fill documentation gaps, and acted as a Business Analyst when needed to improve customer experience",
        "Coordinated UAT signoffs with business users and conducted post-production implementation testing using problem-solving skills",
        "Achievement: Received QA Champion award for leading automation-first initiatives across Java core banking applications; created automation test scripts using Selenium (Java) and communicated effectively with business users to fill documentation gaps and data abstraction"
      ],
      technologies: ["Java", "Selenium", "Core Banking Applications", "UAT", "Business Analysis", "Team Leadership"]
    },
    {
      title: "Senior Test Automation Engineer",
      company: "EBRD via Zensar",
      period: "Nov 2019 – Aug 2022",
      location: "London, UK",
      achievements: [
        "Built robust test automation frameworks for 23 Java applications, optimizing test case design and reducing manual effort and Oracle costs by 50%",
        "Automated web testing with Selenium WebDriver (Java, Python), enhancing coverage, regression efficiency, and security",
        "Executed performance and load testing with JMeter to validate application stability and responsiveness under high user loads, ensuring reliability for critical, high-traffic applications",
        "Led defect management, regression, UAT, and integration testing, ensuring timely sign-offs and effective issue resolution",
        "Delivered rapid regression cycles, conducted sprint demos, and proactively addressed automation requests, with consistent improvement in team delivery",
        "Automated Oracle upgrades using Eggplant and BDD, streamlining patch testing and deployment with a strong focus and technical expertise on security and design"
      ],
      technologies: ["Java", "Python", "Selenium WebDriver", "JMeter", "Oracle", "Eggplant", "BDD", "Performance Testing"]
    },
    {
      title: "Test Automation Engineer",
      company: "National Grid via Zensar",
      period: "Oct 2018 – Nov 2019",
      location: "Pune, India",
      achievements: [
        "Developed automated regression testing frameworks using Selenium WebDriver",
        "Improved efficiency and traceability by streamlining regression testing processes"
      ],
      technologies: ["Selenium WebDriver", "Regression Testing", "Test Automation Frameworks"]
    },
    {
      title: "Test Automation Engineer",
      company: "Ned Bank via Zensar",
      period: "Jan 2018 – Sep 2018",
      location: "Johannesburg, South Africa",
      achievements: [
        "Enhanced existing test automation frameworks using Page Object Model (POM) design patterns, improving maintainability and reducing script maintenance time of IT systems in accordance with engineering practices",
        "Conducted ETL/database validation and performance improvement activities"
      ],
      technologies: ["Selenium", "Page Object Model", "ETL Testing", "Database Validation", "Performance Testing"]
    },
    {
      title: "Mobile Automation Tester",
      company: "MasterCard via Zensar",
      period: "Jan 2017 – Dec 2017",
      location: "Pune, India",
      achievements: [
        "Automated mobile app testing using Appium/UI Automator for functional and regression suites"
      ],
      technologies: ["Appium", "UI Automator", "Mobile Testing", "Functional Testing", "Regression Testing"]
    },
    {
      title: "Automation Engineer",
      company: "Sears Holding India",
      period: "May 2014 – Dec 2016",
      location: "Pune, India",
      achievements: [
        "Performed API/UI automation testing with SOAP UI & Selenium WebDriver"
      ],
      technologies: ["SOAP UI", "Selenium WebDriver", "API Testing", "UI Testing"]
    },
    {
      title: "Functional Tester",
      company: "Sears Holding India",
      period: "July 2012 – Mar 2014",
      location: "Pune, India",
      achievements: [
        "Tested Sears customer data migration to Hadoop-based (big data) architecture, performing data analysis, functional and data integration tests using Pig Scripting and MongoDB"
      ],
      technologies: ["Hadoop", "Big Data", "Pig Scripting", "MongoDB", "Data Migration", "Data Integration Testing"]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C#", "Groovy"],
    "Testing Frameworks": ["Selenium WebDriver", "RestAssured", "Cypress", "Playwright", "TestNG", "JUnit", "Pytest", "Cucumber", "SpecFlow"],
    "DevOps & CI/CD": ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "GitLab CI", "AWS DevOps", "Azure DevOps"],
    "API Testing": ["RestAssured", "Postman", "Newman", "Pact", "Contract Testing", "Swagger/OpenAPI", "SoapUI"],
    "Cloud Platforms": ["AWS", "Azure", "Google Cloud Platform", "Docker Hub", "Container Registry"],
    "Performance Testing": ["JMeter", "LoadRunner", "Gatling", "BlazeMeter", "Performance Monitoring"],
    "Mobile Testing": ["Appium", "Espresso", "XCUITest", "Mobile Automation", "Device Testing"],
    "Security Testing": ["OWASP", "Burp Suite", "Security Scanning", "Vulnerability Assessment", "PCI DSS"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle", "Redis"],
    "Tools & Technologies": ["Git", "JIRA", "Confluence", "Maven", "Gradle", "IntelliJ IDEA", "Visual Studio Code", "Slack", "Microsoft Teams"]
  };

  return (
    <div className="resume-section">
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
                <h3 className="degree-title">Bachelor's degree in Information Technology Engineering</h3>
                <p className="university">1st Division, India</p>
                <p className="graduation-year">Jun 2012</p>
                <div className="education-highlights">
                  <span className="highlight">Information Technology Focus</span>
                  <span className="highlight">Engineering Principles</span>
                  <span className="highlight">1st Division Achievement</span>
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
                <h3 className="cert-title">ISTQB® Certified Tester Foundation Level 2018 v2</h3>
                <p className="cert-issuer">International Software Testing Qualifications Board</p>
                <div className="cert-details">
                  <p className="cert-candidate">Candidate Number: 200547131</p>
                  <p className="cert-number">Certificate Number: 00581483</p>
                </div>
                <span className="cert-year">03 February 2024</span>
              </div>
              <div className="certification-card">
                <div className="cert-icon">🤖</div>
                <h3 className="cert-title">Introduction to Large Language Models (AI / Machine Learning)</h3>
                <p className="cert-issuer">Google Cloud</p>
                <span className="cert-year">2025</span>
              </div>
              <div className="certification-card">
                <div className="cert-icon">🔧</div>
                <h3 className="cert-title">Eggplant Automation Training</h3>
                <p className="cert-issuer">Eggplant Training Program</p>
                <span className="cert-year">2022</span>
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
