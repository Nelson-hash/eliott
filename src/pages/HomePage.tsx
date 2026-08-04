import React, { useState, useEffect } from 'react';

// Chemins mis à jour en .webp
const SLIDESHOW_IMAGES = [
  '/images/interphone/cover.webp',
  '/images/gustave/cover.webp',
  '/images/btlt/cover.webp',
  '/images/boite/cover.webp',
  '/images/chariot-de-course/cover.webp',
  '/images/maison-beton/cover.webp',
  '/images/banc/banc-1.webp',
  '/images/message-tissus/cover.webp',
  '/images/puzzle-marrant/cover.webp',
  '/images/rideau-message/cover.webp',
  '/images/tipi/cover.webp',
];

export function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 500);

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
          className="max-w-full max-h-[82vh] object-contain transition-opacity duration-150 ease-in-out"
        />
      </div>
    </main>
  );
}
