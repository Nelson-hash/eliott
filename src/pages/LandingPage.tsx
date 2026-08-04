import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRotation: number;
  color: string;
  width: number;
  height: number;
  alpha: number;
  decay: number;
}

export function LandingPage() {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const colors = ['#000000', '#111111', '#333333', '#555555', '#888888', '#aaaaaa', '#cccccc'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Projection massive (250 confettis)
    for (let i = 0; i < 250; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 20 + 6; // Explosion plus puissante

      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6, // Impulsion vers le haut
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 12 + 6,
        height: Math.random() * 8 + 4,
        alpha: 1,
        decay: Math.random() * 0.008 + 0.006, // Retombée plus longue
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;

      particles.forEach((p) => {
        if (p.alpha > 0) {
          active = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.97; // Frottement de l'air
          p.vy = p.vy * 0.97 + 0.4; // Gravité
          p.rotation += p.vRotation;
          p.alpha -= p.decay;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          ctx.restore();
        }
      });

      if (active) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />
      <button
        onMouseEnter={triggerConfetti}
        onClick={() => navigate('/home')}
        className="text-5xl md:text-7xl font-light tracking-wider text-gray-900 hover:opacity-60 transition-opacity duration-300 z-20 px-8 py-4 cursor-pointer font-['Helvetica']"
      >
        Entrer
      </button>
    </div>
  );
}
