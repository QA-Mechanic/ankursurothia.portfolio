import React, { useRef, useEffect } from 'react';

function PingPongGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Basic ping pong game logic goes here
    // You can expand this as needed
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Draw static paddle and ball for demo
    ctx.fillStyle = '#ff4e50';
    ctx.fillRect(10, 80, 10, 60); // Paddle
    ctx.beginPath();
    ctx.arc(50, 100, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#f9d423';
    ctx.fill();
  }, []);

  return (
    <section className="section">
      <h2>Mini Ping Pong Game 🏓</h2>
      <canvas ref={canvasRef} width={300} height={200} style={{background:'#fff', borderRadius:'10px'}} />
      <p>Try moving the paddle and keep the ball bouncing!</p>
    </section>
  );
}

export default PingPongGame;