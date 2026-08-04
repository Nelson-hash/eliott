import React, { useState, useEffect } from 'react';

// Photos du défilé automatique
const SLIDESHOW_IMAGES = [
  '/images/interphone/cover.jpg',
  '/images/gustave/cover.jpeg',
  '/images/btlt/cover.jpg',
  '/images/boite/cover.jpeg',
  '/images/chariot-de-course/cover.jpg',
  '/images/maison-beton/cover.jpg',
  '/images/banc/banc-1.jpeg',
  '/images/message-tissus/cover.jpg',
  '/images/puzzle-marrant/cover.jpg',
  '/images/rideau-message/cover.jpg',
  '/images/tipi/cover.jpg',
];

export function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <main
      onClick={togglePause}
      className="relative w-full h-screen bg-white flex items-center justify-center cursor-pointer select-none overflow-hidden pt-20"
    >
      <div className="w-full h-full p-6 md:p-12 flex items-center justify-center">
        <img
          key={currentIndex}
          src={SLIDESHOW_IMAGES[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="max-w-full max-h-[82vh] object-contain transition-opacity duration-500 ease-in-out"
        />
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-[11px] uppercase tracking-widest text-gray-400 bg-white/80 px-3 py-1.5 border border-gray-200 backdrop-blur-sm pointer-events-none">
        {isPaused ? 'PAUSE (Cliquer pour relancer)' : 'DÉFILÉ (Cliquer pour suspendre)'}
      </div>
    </main>
  );
}
