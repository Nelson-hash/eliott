import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // All project images for the slideshow
  const allImages = [
    '/images/chariot-de-course/cover.jpg',
    '/images/chariot-de-course/01.jpg',
    '/images/chariot-de-course/02.jpg',
    '/images/maison-beton/cover.jpg',
    '/images/maison-beton/01.jpg',
    '/images/maison-beton/02.jpg',
    '/images/message-tissus/cover.jpg',
    '/images/message-tissus/01.jpg',
    '/images/message-tissus/02.jpg',
    '/images/puzzle-marrant/cover.jpg',
    '/images/puzzle-marrant/01.jpg',
    '/images/puzzle-marrant/02.jpg',
    '/images/rideau-message/cover.jpg',
    '/images/rideau-message/01.jpg',
    '/images/rideau-message/02.jpg',
    '/images/tipi/cover.jpg',
    '/images/tipi/01.jpg',
    '/images/tipi/02.jpg',
    '/images/vrac/01.jpg',
    '/images/vrac/02.jpg',
    '/images/vrac/03.jpg',
    '/images/vrac/04.jpg',
    '/images/vrac/05.jpg',
    '/images/vrac/06.jpg'
  ];

  // Shuffle images for randomness
  const [shuffledImages] = useState(() => {
    const shuffled = [...allImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Duplicate the array to create seamless loop
    return [...shuffled, ...shuffled];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 0.06; // 20% faster scroll speed
        // Reset when we've scrolled through one complete set
        if (newPosition >= 50) {
          return 0;
        }
        return newPosition;
      });
    }, 16); // 60fps for smooth animation

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center px-8">
      <div className="relative w-full max-w-[90vw] h-[400px] overflow-hidden border-2 border-black bg-white">
        <div 
          className="flex h-full items-center px-8"
          style={{ 
            transform: `translateX(-${scrollPosition}%)`,
            transition: 'none'
          }}
        >
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[350px] mx-4"
            >
              <img
                src={image}
                alt=""
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleEnter}
        className="mt-12 px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider font-light"
      >
        ENTRER
      </button>
    </div>
  );
}
