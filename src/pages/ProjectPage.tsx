import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to gallery
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Photo grid */}
          <div className="grid grid-cols-2 gap-4 h-fit">
            <div className="col-span-2 aspect-[3/2]">
              <img
                src={project.images[0]}
                alt={`${project.title} - Main`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square">
              <img
                src={project.images[1]}
                alt={`${project.title} - Detail 1`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square">
              <img
                src={project.images[2]}
                alt={`${project.title} - Detail 2`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right side - Project info */}
          <div className="lg:pl-8">
            <h1 className="text-3xl font-light text-gray-900 mb-6">
              {project.title}
            </h1>
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                {project.description}
              </p>
              <div className="prose max-w-none">
                <p>
                  {project.extendedDescription || `A collection of photographs exploring ${project.title.toLowerCase()}, 
                  capturing the essence of the subject through careful composition and natural lighting.`}
                </p>
              </div>
              <div className="pt-6">
                <h2 className="text-xl font-light text-gray-900 mb-4">Details</h2>
                <ul className="space-y-2">
                  <li>Year: 2024</li>
                  <li>Location: Paris, France</li>
                  <li>Camera: Digital Medium Format</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}