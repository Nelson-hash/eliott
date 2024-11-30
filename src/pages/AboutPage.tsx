import React from 'react';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-light text-gray-900 mb-8">À propos</h1>
        <div className="prose text-gray-600">
          <p className="mb-6">
            Photographe basé à Paris, je capture l'essence des espaces urbains et des moments de vie
            à travers mon objectif. Mon travail explore la relation entre l'architecture,
            la lumière naturelle et l'expérience humaine.
          </p>
          <p>
            Pour toute demande de collaboration ou de projet, n'hésitez pas à me contacter à
            l'adresse suivante : contact@eliottgoyeau.com
          </p>
        </div>
      </div>
    </main>
  );
}