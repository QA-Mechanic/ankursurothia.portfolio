import React, { useState, useEffect } from 'react';
import './BlogSection.css';

export default function BlogSection() {
  const [expanded, setExpanded] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  const articles = [
    {
      title: "Best Practices in API Contract Testing",
      url: "#",
      excerpt: "Explore why contract testing matters for robust microservice architectures.",
      readTime: "5 min read",
      category: "Testing",
      date: "Sep 2024",
      tags: ["API", "Testing", "Microservices"]
    },
    {
      title: "Getting Started with Selenium & Java",
      url: "#",
      excerpt: "A comprehensive guide to automating web tests using Selenium WebDriver with Java.",
      readTime: "8 min read",
      category: "Automation",
      date: "Aug 2024",
      tags: ["Selenium", "Java", "WebDriver"]
    },
    {
      title: "Playwright vs Selenium: A Complete Comparison",
      url: "#",
      excerpt: "Deep dive into modern test automation frameworks and their capabilities.",
      readTime: "12 min read",
      category: "Tools",
      date: "Jul 2024",
      tags: ["Playwright", "Selenium", "Comparison"]
    }
  ];

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
            <span className="article-count">({articles.length})</span>
          </h2>
        </div>
        <div className="header-glow"></div>
      </div>

      <div className={`content-container ${expanded ? 'expanded' : ''}`}>
        <div className="articles-grid">
          {articles.map((article, idx) => (
            <article 
              key={idx} 
              className={`article-card ${animateCards ? 'animate-in' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="card-header">
                <div className="category-badge">{article.category}</div>
                <div className="read-time">{article.readTime}</div>
              </div>
              
              <div className="card-content">
                <h3 className="article-title">
                  <a href={article.url} className="article-link">
                    {article.title}
                  </a>
                </h3>
                <p className="article-excerpt">{article.excerpt}</p>
                
                <div className="article-meta">
                  <span className="publish-date">{article.date}</span>
                  <div className="tags-container">
                    {article.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="card-footer">
                <a href={article.url} className="read-more-btn">
                  Read More
                  <span className="arrow">→</span>
                </a>
              </div>
              
              <div className="card-glow"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
