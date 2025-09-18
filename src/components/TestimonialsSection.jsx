import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Ankur is a detail-oriented automation engineer and a fantastic team player. His expertise in test automation frameworks significantly improved our delivery pipeline.",
      author: "Jane Doe",
      position: "QA Lead",
      company: "XYZ Corp",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      text: "Delivered robust testing frameworks that improved our CI/CD pipeline. Ankur's mentoring skills helped our junior developers understand testing best practices.",
      author: "John Smith",
      position: "DevOps Manager",
      company: "ABC Solutions",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      text: "Outstanding technical skills combined with excellent communication. Ankur's contract testing implementation saved us countless hours of debugging.",
      author: "Sarah Wilson",
      position: "Senior Developer",
      company: "Tech Innovations Ltd",
      avatar: "👩‍🔬",
      rating: 5
    }
  ];

  useEffect(() => {
    if (expanded && testimonials.length > 1) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [expanded, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="testimonials-section">
      <div className="section-header" onClick={() => setExpanded(!expanded)}>
        <div className="header-content">
          <div className="icon-wrapper">
            <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>
              {expanded ? "▼" : "▶"}
            </span>
            <div className="testimonials-icon">💬</div>
          </div>
          <h2 className="section-title">
            What People Say
            <span className="testimonial-count">({testimonials.length} Reviews)</span>
          </h2>
        </div>
        <div className="header-glow"></div>
      </div>

      <div className={`content-container ${expanded ? 'expanded' : ''}`}>
        <div className="testimonials-carousel">
          <div className="carousel-container">
            <button 
              className="carousel-btn prev-btn"
              onClick={prevTestimonial}
              disabled={testimonials.length <= 1}
            >
              ‹
            </button>
            
            <div className="testimonial-card active">
              <div className="quote-icon">"</div>
              <div className="testimonial-content">
                <div className="stars-rating">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="testimonial-text">
                  {testimonials[currentTestimonial].text}
                </blockquote>
                <div className="author-info">
                  <div className="author-avatar">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="author-details">
                    <cite className="author-name">
                      {testimonials[currentTestimonial].author}
                    </cite>
                    <p className="author-position">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="author-company">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="carousel-btn next-btn"
              onClick={nextTestimonial}
              disabled={testimonials.length <= 1}
            >
              ›
            </button>
          </div>
          
          <div className="carousel-indicators">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${currentTestimonial === idx ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(idx)}
              />
            ))}
          </div>
        </div>
        
        <div className="testimonials-footer">
          <p className="footer-note">
            <span className="check-icon">✓</span>
            All testimonials are from verified colleagues and clients
          </p>
        </div>
      </div>
    </div>
  );
}
