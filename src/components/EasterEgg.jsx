import React, { useState, useEffect } from 'react';
import './EasterEgg.css';

export default function EasterEgg() {
  const [showEgg, setShowEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  const funFacts = [
    "Automated testing saves hundreds of hours every year! 🚀",
    "Did you know? The first computer bug was an actual bug found in 1947! 🐛",
    "Quality Assurance engineers are basically professional pessimists... and that's a good thing! 😄",
    "I've prevented more bugs than a pest control company! 🦟",
    "Testing is like archaeology - you dig until you find something broken! 🔍",
    "My code doesn't have bugs, it has 'undocumented features'! ✨"
  ];

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setShowEgg(true);
      setAnimateText(true);
    }
  };

  useEffect(() => {
    if (showEgg) {
      const timer = setInterval(() => {
        setCurrentFact(prev => (prev + 1) % funFacts.length);
        setAnimateText(true);
        setTimeout(() => setAnimateText(false), 500);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [showEgg, funFacts.length]);

  return (
    <div className="easter-egg-container">
      {!showEgg ? (
        <div className="easter-trigger" onClick={handleClick}>
          <span className="trigger-text">
            🥚 Click me {3 - clickCount} more time{3 - clickCount !== 1 ? 's' : ''} for a surprise!
          </span>
          <div className="click-ripple"></div>
        </div>
      ) : (
        <div className={`easter-egg ${showEgg ? 'revealed' : ''}`}>
          <div className="egg-header">
            <h3 className="egg-title">
              <span className="party-icon">🎉</span>
              Fun Facts Corner!
              <span className="party-icon">🎉</span>
            </h3>
            <button 
              className="close-btn"
              onClick={() => {
                setShowEgg(false);
                setClickCount(0);
              }}
            >
              ×
            </button>
          </div>
          
          <div className="egg-content">
            <div className={`fact-display ${animateText ? 'animate' : ''}`}>
              <p className="fun-fact">{funFacts[currentFact]}</p>
            </div>
            
            <div className="fact-navigation">
              <button
                className="nav-btn"
                onClick={() => {
                  setCurrentFact((prev) => (prev - 1 + funFacts.length) % funFacts.length);
                  setAnimateText(true);
                  setTimeout(() => setAnimateText(false), 500);
                }}
              >
                ← Previous
              </button>
              
              <div className="fact-indicators">
                {funFacts.map((_, idx) => (
                  <span
                    key={idx}
                    className={`fact-dot ${currentFact === idx ? 'active' : ''}`}
                  />
                ))}
              </div>
              
              <button
                className="nav-btn"
                onClick={() => {
                  setCurrentFact((prev) => (prev + 1) % funFacts.length);
                  setAnimateText(true);
                  setTimeout(() => setAnimateText(false), 500);
                }}
              >
                Next →
              </button>
            </div>
          </div>
          
          <div className="confetti-animation">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  backgroundColor: ['#ffd423', '#c0863c', '#ff4e50'][Math.floor(Math.random() * 3)]
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
