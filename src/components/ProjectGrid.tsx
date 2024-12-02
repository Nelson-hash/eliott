import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { getImageUrl } from '../utils/imageUtils';

export function ProjectGrid() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-4 mt-24">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="block mb-6 group relative"
        >
          <img
            src={getImageUrl(project.coverImage)}
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
  );
}