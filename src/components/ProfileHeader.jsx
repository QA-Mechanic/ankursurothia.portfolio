import React from 'react';
import './ProfileHeader.css';
import profileImg from '../assets/profile.jpg';

export default function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="profile-container">
        <img 
          src={profileImg} 
          alt="Ankur Surothia" 
          className="profile-image"
        />
        <h1 className="profile-name">Ankur Surothia</h1>
        <h2 className="profile-title">QA Automation Engineer</h2>
        
        <div className="profile-location">
          <span>📍</span>
          <span>London, UK</span>
        </div>
        
        <p className="profile-bio">
          Passionate QA Automation Engineer with 6+ years of experience in building 
          robust test frameworks and ensuring software quality. Specialized in SAP testing, 
          API automation, and continuous integration.
        </p>
        
        <div className="skills-preview">
          <span className="skill-tag">SAP Testing</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Playwright</span>
          <span className="skill-tag">API Testing</span>
          <span className="skill-tag">Test Automation</span>
        </div>
      </div>
    </div>
  );
}
