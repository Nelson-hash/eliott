import React from 'react';

export function VracPage() {
  const vracImages = [
    'https://images.unsplash.com/photo-1504703395950-b89145a5425b',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    'https://images.unsplash.com/photo-1494236581341-7d38b2e7d824',
    'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
    'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a'
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