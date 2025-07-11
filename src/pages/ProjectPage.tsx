import React from 'react';
import { useParams } from 'react-router-dom';

export function ProjectPage() {
  const { id } = useParams();
  
  const getProjectImages = (projectId: string) => {
    // Project-specific image configurations
    const projectConfigs: { [key: string]: { cover: string; images: string[] } } = {
      'interphone': {
        cover: 'cover.jpg',
        images: ['01.jpg', '02.jpg', '03.jpg']
      },
      'gustave': {
        cover: 'cover.jpeg',
        images: ['01.jpg', '02.jpg']
      },
      'btlt': {
        cover: 'cover.jpg',
        images: ['01.jpg', '02.jpeg']
      },
      'boite': {
        cover: 'cover.jpeg',
        images: ['01.jpg', '02.jpeg', '03.jpg', '04.jpg', '05.jpg']
      }
    };

    // Default configuration for existing projects
    const defaultConfig = {
      cover: 'cover.jpg',
      images: ['01.jpg', '02.jpg']
    };

    const config = projectConfigs[projectId] || defaultConfig;
    
    return [
      `/images/${projectId}/${config.cover}`,
      ...config.images.map(img => `/images/${projectId}/${img}`)
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
