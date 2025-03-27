import React from 'react';
import { useParams } from 'react-router-dom';

export function ProjectPage() {
  const { id } = useParams();
  
  const getProjectImages = (projectId: string) => {
    return [
      `/images/${projectId}/cover.jpg`,
      `/images/${projectId}/01.jpg`,
      `/images/${projectId}/02.jpg`
    ];
  };

  const getProjectTitle = (projectId: string) => {
    return projectId.split('-').map(word => word.toUpperCase()).join(' ');
  };

  if (!id) {
    return <div>Project not found</div>;
  }

  const images = getProjectImages(id);
  const title = getProjectTitle(id);

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-light text-gray-900 mb-8">{title}</h1>
        <div className="space-y-12">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="w-full max-w-4xl mx-auto"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
