import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    return shuffled;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
    }, 300); // Slightly slower for better visibility

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center px-4">
      <div className="relative w-full max-w-[600px] aspect-[3/2] overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-linear h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {shuffledImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-full h-full object-cover flex-shrink-0"
            />
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
