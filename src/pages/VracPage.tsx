import React from 'react';
import { getImageUrl } from '../utils/imageUtils';

export function VracPage() {
  const vracImages = [
    'vrac/01.jpg',
    'vrac/02.jpg',
    'vrac/03.jpg',
    'vrac/04.jpg',
    'vrac/05.jpg',
    'vrac/06.jpg'
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Vrac</h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {vracImages.map((image, index) => (
            <img
              key={index}
              src={getImageUrl(image)}
              alt={`Vrac image ${index + 1}`}
              className="w-full aspect-[2/3] object-cover mb-6"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error(`Failed to load image: ${target.src}`);
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}