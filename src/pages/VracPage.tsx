import React from 'react';

export function VracPage() {
  const vracImages = [
    '/images/vrac/01.jpg',
    '/images/vrac/02.jpg',
    '/images/vrac/03.jpg',
    '/images/vrac/04.jpg',
    '/images/vrac/05.jpg',
    '/images/vrac/06.jpg'
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Vrac</h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {vracImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Vrac image ${index + 1}`}
              className="w-full aspect-[2/3] object-cover mb-6"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
