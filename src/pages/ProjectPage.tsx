import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { getImageUrl } from '../utils/imageUtils';

export function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-light text-gray-900 mb-8">{project.title}</h1>
        <p className="text-gray-600 mb-12 max-w-2xl">{project.description}</p>
        <div className="space-y-12">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={getImageUrl(image)}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full max-w-4xl mx-auto"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </main>
  );
}