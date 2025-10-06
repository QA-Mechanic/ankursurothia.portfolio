import React, { useState, useEffect } from 'react';
import './BlogSection.css';

export default function BlogSection() {
  const [expanded, setExpanded] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  const isUnderDevelopment = true;

  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => setAnimateCards(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimateCards(false);
    }
  }, [expanded]);

  return (
    <div className="blog-section">
      <div className="section-header" onClick={() => setExpanded(!expanded)}>
        <div className="header-content">
          <div className="icon-wrapper">
            <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>
              {expanded ? "▼" : "▶"}
            </span>
            <div className="blog-icon">📚</div>
          </div>
          <h2 className="section-title">
            Blog & Articles
            <span className="development-badge">Under Development</span>
          </h2>
        </div>
        <div className="header-glow"></div>
      </div>

      <div className={`content-container ${expanded ? 'expanded' : ''}`}>
        {isUnderDevelopment ? (
          <div className="under-development">
            <div className="development-content">
              <div className="development-icon">🚧</div>
              <h3 className="development-title">Coming Soon!</h3>
              <p className="development-message">
                I'm currently working on creating insightful articles about QA automation, 
                testing best practices, and industry insights. Check back soon for valuable 
                content that will help you enhance your testing skills.
              </p>
              <div className="development-features">
                <div className="feature-item">
                  <span className="feature-icon">📝</span>
                  <span>Testing Best Practices</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔧</span>
                  <span>Automation Frameworks</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💡</span>
                  <span>Industry Insights</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <span>Performance Testing</span>
                </div>
              </div>
              <div className="stay-tuned">
                <span className="pulse-dot"></span>
                Stay tuned for updates!
              </div>
            </div>
          </div>
        ) : (
          <div className="articles-grid">
            {/* Future articles will go here */}
          </div>
        )}
      </div>
    </div>
  );
}
