import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Liste des images à précharger en arrière-plan
const IMAGES_TO_PRELOAD = [
  '/images/interphone/cover.webp',
  '/images/gustave/cover.webp',
  '/images/btlt/cover.webp',
  '/images/boite/cover.webp',
  '/images/chariot-de-course/cover.webp',
  '/images/maison-beton/cover.webp',
  '/images/message-tissus/cover.webp',
  '/images/puzzle-marrant/cover.webp',
  '/images/rideau-message/cover.webp',
  '/images/tipi/cover.webp',
];

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

  // PRÉCHARGEMENT DANS LE CACHE NAVIGATEUR
  useEffect(() => {
    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // ANIMATION CONFETTIS COLORÉS
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    
    // PALETTE DE COULEURS VIVES & FESTIVES
    const colors = [
      '#FF2D55', // Rose Vif
      '#FF9500', // Orange
      '#FFCC00', // Jaune
      '#4CD964', // Vert
      '#5AC8FA', // Bleu Ciel
      '#007AFF', // Bleu Roi
      '#5856D6', // Violet
      '#FF3B30', // Rouge
      '#E040FB', // Magenta
    ];
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 250 confettis explosifs
    for (let i = 0; i < 250; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 22 + 6;

      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 12 + 6,
        height: Math.random() * 8 + 4,
        alpha: 1,
        decay: Math.random() * 0.008 + 0.006,
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
          p.vx *= 0.97;
          p.vy = p.vy * 0.97 + 0.4;
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
