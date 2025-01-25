import React, { useEffect, useRef } from 'react';

const CryptoBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.symbol = ['₿', 'Ξ', '◈', '×'][Math.floor(Math.random() * 4)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 255, 157, ${this.opacity})`;
        ctx.font = `${this.size * 8}px Space Grotesk`;
        ctx.fillText(this.symbol, this.x, this.y);
      }
    }

    // Create particles
    const particles = Array(30).fill().map(() => new Particle());

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 11, 13, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="crypto-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: 'linear-gradient(to bottom right, #0a0e17, #1a1f2e)'
      }}
    />
  );
};

export default CryptoBackground;