import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const projects = [
    // New projects first
    {
      id: 'interphone',
      title: 'INTERPHONE',
      image: '/images/interphone/cover.jpg'
    },
    {
      id: 'gustave',
      title: 'GUSTAVE',
      image: '/images/gustave/cover.jpeg'
    },
    {
      id: 'btlt',
      title: 'BTLT',
      image: '/images/btlt/cover.jpg'
    },
    {
      id: 'boite',
      title: 'BOITE',
      image: '/images/boite/cover.jpeg'
    },
    // Original projects
    {
      id: 'chariot-de-course',
      title: 'CHARIOT DE COURSE',
      image: '/images/chariot-de-course/cover.jpg'
    },
    {
      id: 'maison-beton',
      title: 'MAISON BETON',
      image: '/images/maison-beton/cover.jpg'
    },
    {
      id: 'message-tissus',
      title: 'MESSAGE TISSUS',
      image: '/images/message-tissus/cover.jpg'
    },
    {
      id: 'puzzle-marrant',
      title: 'PUZZLE MARRANT',
      image: '/images/puzzle-marrant/cover.jpg'
    },
    {
      id: 'rideau-message',
      title: 'RIDEAU MESSAGE',
      image: '/images/rideau-message/cover.jpg'
    },
    {
      id: 'tipi',
      title: 'TIPI',
      image: '/images/tipi/cover.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative"
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
      </div>
    </main>
  );
}
