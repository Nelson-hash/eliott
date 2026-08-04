import React from 'react';
import { Link } from 'react-router-dom';

export function VracPage() {
  const projects = [
    { id: 'banc-250', title: 'BANC 250', image: '/images/banc/banc-1.webp', link: '/mobilier' },
    { id: 'interphone', title: 'INTERPHONE', image: '/images/interphone/cover.webp', link: '/projects/interphone' },
    { id: 'gustave', title: 'GUSTAVE', image: '/images/gustave/cover.webp', link: '/projects/gustave' },
    { id: 'btlt', title: 'BTLT', image: '/images/btlt/cover.webp', link: '/projects/btlt' },
    { id: 'boite', title: 'BOITE', image: '/images/boite/cover.webp', link: '/projects/boite' },
    { id: 'chariot-de-course', title: 'CHARIOT DE COURSE', image: '/images/chariot-de-course/cover.webp', link: '/projects/chariot-de-course' },
    { id: 'maison-beton', title: 'MAISON BETON', image: '/images/maison-beton/cover.webp', link: '/projects/maison-beton' },
    { id: 'message-tissus', title: 'MESSAGE TISSUS', image: '/images/message-tissus/cover.webp', link: '/projects/message-tissus' },
    { id: 'puzzle-marrant', title: 'PUZZLE MARRANT', image: '/images/puzzle-marrant/cover.webp', link: '/projects/puzzle-marrant' },
    { id: 'rideau-message', title: 'RIDEAU MESSAGE', image: '/images/rideau-message/cover.webp', link: '/projects/rideau-message' },
    { id: 'tipi', title: 'TIPI', image: '/images/tipi/cover.webp', link: '/projects/tipi' },
  ];

  // Images du vrac mises à jour en .webp
  const vracImages = Array.from({ length: 6 }, (_, i) => `/images/vrac/${String(i + 1).padStart(2, '0')}.webp`);

  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* GRILLE DES PROJETS */}
        <h1 className="text-3xl font-light text-gray-900 mb-8">Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group relative block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[2/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-light text-xl">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* SECTION VRAC */}
        <h2 className="text-3xl font-light text-gray-900 mb-8 border-t border-gray-100 pt-12">Vrac</h2>
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
