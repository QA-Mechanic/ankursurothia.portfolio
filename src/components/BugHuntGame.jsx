import React, { useState, useEffect, useCallback } from 'react';
import './BugHuntGame.css';

export default function BugHuntGame() {
  const [showGame, setShowGame] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [bugs, setBugs] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [highScore, setHighScore] = useState(localStorage.getItem('bugHuntHighScore') || 0);

  const bugTypes = [
    { emoji: '🐛', name: 'Syntax Bug', points: 10 },
    { emoji: '🦟', name: 'Logic Bug', points: 15 },
    { emoji: '🐞', name: 'Runtime Bug', points: 20 },
    { emoji: '🕷️', name: 'Memory Leak', points: 25 },
    { emoji: '🦂', name: 'Critical Bug', points: 30 }
  ];

  const generateBug = useCallback(() => {
    const bug = bugTypes[Math.floor(Math.random() * bugTypes.length)];
    const newBug = {
      id: Date.now() + Math.random(),
      ...bug,
      x: Math.random() * 80 + 10, // 10-90% from left
      y: Math.random() * 60 + 10, // 10-70% from top
      speed: Math.random() * 2 + 1
    };
    setBugs(prev => [...prev, newBug]);
  }, []);

  const moveBugs = useCallback(() => {
    setBugs(prev => prev.map(bug => ({
      ...bug,
      x: bug.x + (Math.random() - 0.5) * bug.speed,
      y: bug.y + (Math.random() - 0.5) * bug.speed
    })).filter(bug => 
      bug.x >= 0 && bug.x <= 100 && bug.y >= 0 && bug.y <= 100
    ));
  }, []);

  const catchBug = (bugId, points) => {
    setBugs(prev => prev.filter(bug => bug.id !== bugId));
    setScore(prev => prev + points);
    
    // Add catch effect
    const catchSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvGQdBjiR1/LNeSsFJHfH8N2QQAoU');
    // catchSound.play().catch(() => {}); // Silent fail if audio not supported
  };

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setBugs([]);
  };

  const endGame = () => {
    setGameActive(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('bugHuntHighScore', score.toString());
    }
  };

  // Game logic
  useEffect(() => {
    if (gameActive) {
      const bugSpawner = setInterval(generateBug, 1500);
      const bugMover = setInterval(moveBugs, 100);
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(bugSpawner);
        clearInterval(bugMover);
        clearInterval(timer);
      };
    }
  }, [gameActive, generateBug, moveBugs]);

  const handleTriggerClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setShowGame(true);
    }
  };

  if (!showGame) {
    return (
      <div className="easter-trigger" onClick={handleTriggerClick}>
        <span className="trigger-text">
          🐛 Found a bug? Click {3 - clickCount} more time{3 - clickCount !== 1 ? 's' : ''} to start hunting!
        </span>
      </div>
    );
  }

  return (
    <div className="bug-hunt-game">
      <div className="game-header">
        <h3 className="game-title">🐛 Bug Hunt Challenge!</h3>
        <button 
          className="close-btn"
          onClick={() => {
            setShowGame(false);
            setClickCount(0);
            setGameActive(false);
          }}
        >
          ×
        </button>
      </div>

      <div className="game-stats">
        <div className="stat">
          <span className="stat-label">Score:</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Time:</span>
          <span className="stat-value">{timeLeft}s</span>
        </div>
        <div className="stat">
          <span className="stat-label">High Score:</span>
          <span className="stat-value">{highScore}</span>
        </div>
      </div>

      {!gameActive ? (
        <div className="game-instructions">
          <h4>🚀 Ready to catch some bugs?</h4>
          <p>Click on the moving bugs to catch them!</p>
          <ul>
            <li>🐛 Syntax Bug: 10 points</li>
            <li>🦟 Logic Bug: 15 points</li>
            <li>🐞 Runtime Bug: 20 points</li>
            <li>🕷️ Memory Leak: 25 points</li>
            <li>🦂 Critical Bug: 30 points</li>
          </ul>
          <button className="start-btn" onClick={startGame}>
            Start Hunting! 🎯
          </button>
        </div>
      ) : (
        <div className="game-area">
          {bugs.map(bug => (
            <div
              key={bug.id}
              className="bug"
              style={{
                left: `${bug.x}%`,
                top: `${bug.y}%`,
                fontSize: `${1.5 + bug.points / 30}rem`
              }}
              onClick={() => catchBug(bug.id, bug.points)}
              title={`${bug.name} - ${bug.points} points`}
            >
              {bug.emoji}
            </div>
          ))}
          
          {timeLeft === 0 && (
            <div className="game-over">
              <h4>🎉 Hunt Complete!</h4>
              <p>Final Score: {score}</p>
              {score > highScore && <p className="new-record">🏆 New High Score!</p>}
              <button className="play-again-btn" onClick={startGame}>
                Hunt Again! 🐛
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}