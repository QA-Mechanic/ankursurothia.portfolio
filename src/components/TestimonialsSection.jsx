import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Ankur is fun to work with and is full of new ideas. Comes with a different take on the current approaches and suggests new things. He is always ready to learn more and something new. He is a hard-working, talented and reliable team mate. A quick learner and does his tasks with minimal direction. He is technically sound possessing appreciable knowledge of JAVA, testNG, Cucumber-JVM.",
      author: "Abhishek Awale",
      position: "Director QA Engineering",
      company: "Eightfold.ai | Ex - Amagi | Disney+Hotstar | Ridecell",
      avatar: "👨‍�",
      rating: 5,
      relationship: "January 21, 2016, Abhishek managed Ankur directly"
    },
    {
      text: "Ankur is a highly organized, goal oriented, independent and hard working perfectionist always ready to put all his energy and stamina to get the job done. Careful co-worker. Ankur can deliver under pressure, no slip-ups, ready to deal with difficult situations and solve the problems on time. It is fun working with Ankur.",
      author: "Ratanpriya Shrivastava",
      position: "Lead Software Engineer",
      company: "Macys Systems & Technology Inc",
      avatar: "�‍�",
      rating: 5,
      relationship: "January 21, 2016, Ratanpriya worked with Ankur on the same team"
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
                    {testimonials[currentTestimonial].relationship && (
                      <p className="author-relationship">
                        {testimonials[currentTestimonial].relationship}
                      </p>
                    )}
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
