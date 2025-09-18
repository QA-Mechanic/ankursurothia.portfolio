import React, { useRef, useEffect, useState, useCallback } from 'react';
import './PingPongGame.css';

export default function PingPongGame() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'paused', 'gameOver'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('pingPongHighScore') || 0);
  const [gameSpeed, setGameSpeed] = useState(1);

  // Game objects
  const gameObjects = useRef({
    ball: { x: 200, y: 150, dx: 3, dy: 2, radius: 8 },
    paddle: { x: 10, y: 120, width: 12, height: 60, speed: 5 },
    aiPaddle: { x: 378, y: 120, width: 12, height: 60, speed: 3 }
  });

  const keys = useRef({});

  const resetGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    gameObjects.current = {
      ball: { x: canvas.width / 2, y: canvas.height / 2, dx: 3 * gameSpeed, dy: 2 * gameSpeed, radius: 8 },
      paddle: { x: 10, y: canvas.height / 2 - 30, width: 12, height: 60, speed: 5 },
      aiPaddle: { x: canvas.width - 22, y: canvas.height / 2 - 30, width: 12, height: 60, speed: 3 * gameSpeed }
    };
    setScore(0);
  }, [gameSpeed]);

  const updateGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || gameState !== 'playing') return;

    const { ball, paddle, aiPaddle } = gameObjects.current;

    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top/bottom walls
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy;
    }

    // Ball collision with paddles
    if (ball.x - ball.radius <= paddle.x + paddle.width &&
        ball.y >= paddle.y &&
        ball.y <= paddle.y + paddle.height &&
        ball.dx < 0) {
      ball.dx = -ball.dx;
      setScore(prev => prev + 1);
      
      // Increase speed slightly
      ball.dx *= 1.05;
      ball.dy *= 1.05;
    }

    if (ball.x + ball.radius >= aiPaddle.x &&
        ball.y >= aiPaddle.y &&
        ball.y <= aiPaddle.y + aiPaddle.height &&
        ball.dx > 0) {
      ball.dx = -ball.dx;
    }

    // Ball out of bounds (game over)
    if (ball.x < 0) {
      setGameState('gameOver');
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('pingPongHighScore', score.toString());
      }
      return;
    }

    // Ball hits right wall (reset)
    if (ball.x > canvas.width) {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.dx = -Math.abs(ball.dx);
    }

    // Move player paddle
    if (keys.current['ArrowUp'] && paddle.y > 0) {
      paddle.y -= paddle.speed;
    }
    if (keys.current['ArrowDown'] && paddle.y < canvas.height - paddle.height) {
      paddle.y += paddle.speed;
    }

    // AI paddle movement
    const aiCenter = aiPaddle.y + aiPaddle.height / 2;
    if (ball.y < aiCenter - 10) {
      aiPaddle.y -= aiPaddle.speed;
    } else if (ball.y > aiCenter + 10) {
      aiPaddle.y += aiPaddle.speed;
    }

    // Keep AI paddle in bounds
    aiPaddle.y = Math.max(0, Math.min(canvas.height - aiPaddle.height, aiPaddle.y));
  }, [gameState, score, highScore]);

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { ball, paddle, aiPaddle } = gameObjects.current;

    // Clear canvas with gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a1a20');
    gradient.addColorStop(1, '#0a0a0b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw center line
    ctx.setLineDash([10, 10]);
    ctx.strokeStyle = '#ffd423';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles with glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#ffd423';
    
    // Player paddle
    ctx.fillStyle = '#ffd423';
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    
    // AI paddle
    ctx.fillStyle = '#c0863c';
    ctx.fillRect(aiPaddle.x, aiPaddle.y, aiPaddle.width, aiPaddle.height);

    // Draw ball with glow
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#ff4e50';
    ctx.fillStyle = '#ff4e50';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowBlur = 0;
  }, []);

  const gameLoop = useCallback(() => {
    updateGame();
    drawGame();
    animationRef.current = requestAnimationFrame(gameLoop);
  }, [updateGame, drawGame]);

  const startGame = () => {
    setGameState('playing');
    resetGame();
  };

  const pauseGame = () => {
    setGameState(gameState === 'paused' ? 'playing' : 'paused');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      keys.current[e.key] = true;
      if (e.key === ' ') {
        e.preventDefault();
        if (gameState === 'playing' || gameState === 'paused') {
          pauseGame();
        }
      }
    };

    const handleKeyUp = (e) => {
      keys.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing') {
      animationRef.current = requestAnimationFrame(gameLoop);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, gameLoop]);

  useEffect(() => {
    drawGame();
  }, [drawGame]);

  return (
    <div className="ping-pong-game">
      <div className="game-header">
        <h3 className="game-title">
          <span className="game-icon">🏓</span>
          Retro Ping Pong
        </h3>
        <div className="game-stats">
          <div className="stat-item">
            <span className="stat-label">Score:</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Best:</span>
            <span className="stat-value">{highScore}</span>
          </div>
        </div>
      </div>

      <div className="game-container">
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="game-canvas"
        />
        
        {gameState === 'menu' && (
          <div className="game-overlay menu-overlay">
            <div className="menu-content">
              <h4>Ready to Play?</h4>
              <p>Use arrow keys to move your paddle</p>
              <div className="menu-controls">
                <label className="speed-control">
                  Difficulty:
                  <select 
                    value={gameSpeed} 
                    onChange={(e) => setGameSpeed(Number(e.target.value))}
                  >
                    <option value={0.8}>Easy</option>
                    <option value={1}>Normal</option>
                    <option value={1.5}>Hard</option>
                  </select>
                </label>
              </div>
              <button className="game-btn start-btn" onClick={startGame}>
                Start Game
              </button>
            </div>
          </div>
        )}

        {gameState === 'paused' && (
          <div className="game-overlay pause-overlay">
            <div className="pause-content">
              <h4>Game Paused</h4>
              <p>Press SPACE or click Resume to continue</p>
              <button className="game-btn resume-btn" onClick={pauseGame}>
                Resume
              </button>
            </div>
          </div>
        )}

        {gameState === 'gameOver' && (
          <div className="game-overlay gameover-overlay">
            <div className="gameover-content">
              <h4>Game Over!</h4>
              <div className="final-score">
                <p>Final Score: <span className="score-highlight">{score}</span></p>
                {score === highScore && score > 0 && (
                  <p className="new-record">🎉 New High Score!</p>
                )}
              </div>
              <div className="gameover-buttons">
                <button className="game-btn play-again-btn" onClick={startGame}>
                  Play Again
                </button>
                <button 
                  className="game-btn menu-btn" 
                  onClick={() => setGameState('menu')}
                >
                  Main Menu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="game-controls">
        <div className="controls-info">
          <span className="control-item">↑↓ Move Paddle</span>
          <span className="control-item">SPACE Pause</span>
        </div>
        {gameState === 'playing' && (
          <button className="game-btn pause-btn" onClick={pauseGame}>
            ⏸️ Pause
          </button>
        )}
      </div>
    </div>
  );
}
