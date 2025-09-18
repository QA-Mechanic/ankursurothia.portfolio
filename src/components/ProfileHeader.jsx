import React from 'react';
import profileImg from '../assets/profile.jpg';

export default function ProfileHeader() {
  return (
    <header className="profile-header">
      <img src={profileImg} alt="Ankur Surothia" className="profile-img" />
      <div>
        <h1>Ankur Surothia</h1>
        <p className="profile-title">QA Automation Specialist | SDET | Test Architect</p>
        <p className="profile-bio">
          🚀 Passionate about automation, API & UI testing, and building robust frameworks.<br />
          💼 Experience with Selenium, RestAssured, Cypress, Playwright, Java, Python, JS.<br />
          🛠️ Skilled in CI/CD, contract testing, and cloud automation.<br />
          🌏 Based in India | Open to remote opportunities!
        </p>
        <div className="profile-skills">
          <strong>Skills:</strong> Java, Python, JavaScript, Selenium, RestAssured, Cypress, Playwright, GitHub Actions, Docker
        </div>
        <div className="profile-contact">
          <strong>Email:</strong> ankur.surothia@example.com
        </div>
      </div>
    </header>
  );
}