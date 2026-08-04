import React, { useState } from 'react';

// Chemins mis à jour vers public/images/banc/
const IMAGES = [
  '/images/banc/banc-1.jpeg',
  '/images/banc/banc-2.jpeg',
  '/images/banc/banc-3.jpeg',
  '/images/banc/banc-4.jpeg',
  '/images/banc/banc-5.jpeg',
];

export function MobilierPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transformOrigin: 'center center',
    transform: 'scale(1)',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2.2)',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)',
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    /* Marges supérieures adaptées au Header fixe */
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* GALERIE ET ZOOM */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div
            className="relative aspect-[4/3] bg-neutral-50 border border-neutral-200 overflow-hidden cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={IMAGES[currentIndex]}
              alt="Banc 250 - Eliotty Atelier"
              className="w-full h-full object-contain transition-transform duration-150 ease-out"
              style={zoomStyle}
            />
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-neutral-200 text-neutral-900 hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center font-mono text-sm z-10"
              aria-label="Photo précédente"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-neutral-200 text-neutral-900 hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center font-mono text-sm z-10"
              aria-label="Photo suivante"
            >
              &gt;
            </button>
          </div>

          {/* VIGNETTES */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {IMAGES.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Vignette ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`w-20 h-14 object-cover bg-neutral-50 border cursor-pointer transition-all duration-200 flex-shrink-0 ${
                  currentIndex === idx
                    ? 'border-black opacity-100'
                    : 'border-neutral-200 opacity-40 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS ET ACTION MARKETING */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Sur commande — Série limitée
            </div>

            <h1 className="text-3xl font-normal tracking-tight uppercase text-black mb-4">
              Banc 250
            </h1>

            <p className="text-neutral-600 text-sm leading-relaxed mb-8">
              Banc architectural d’exception de 2,50 m. Structure autoportante en multiplis de bouleau avec piètements évidés à motif stellaire, couronnée d'une assise thermolaquée en aluminium perforé. Allie légèreté visuelle et rigueur industrielle.
            </p>

            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-black mb-3 font-mono">
              Caractéristiques principales
            </h2>

            <dl className="divide-y divide-neutral-100 border-t border-b border-neutral-100 mb-8">
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Dimensions</dt>
                <dd className="text-black font-medium text-right">L 250 × l 50 × H 50 cm</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Assise</dt>
                <dd className="text-black font-medium text-right">Aluminium perforé</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Structure</dt>
                <dd className="text-black font-medium text-right">Multiplis Bouleau (CNC)</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Finition</dt>
                <dd className="text-black font-medium text-right">Vernis mat de protection</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Origine</dt>
                <dd className="text-black font-medium text-right">Fabriqué en Atelier</dd>
              </div>
            </dl>
          </div>

          {/* APPEL À L'ACTION (CTA) */}
          <div className="space-y-3 pt-2">
            <a
              href="mailto:contact@eliotty-atelier.com?subject=Demande%20de%20devis%20-%20Banc%20250"
              className="w-full flex justify-between items-center bg-black text-white px-6 py-4 text-xs font-mono font-semibold uppercase tracking-widest border border-black hover:bg-white hover:text-black transition-colors duration-200 shadow-sm"
            >
              <span>Demander un devis sur-mesure</span>
              <span>&rarr;</span>
            </a>

            <p className="text-center text-[11px] font-mono text-neutral-500">
              Réponse & fiche tarifaire envoyées sous 24h
            </p>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100 text-center text-[11px] text-neutral-500">
              <div>
                <strong className="block text-black">Sur-mesure</strong>
                Ajustements possibles
              </div>
              <div>
                <strong className="block text-black">Livraison</strong>
                Monde & Protection pro
              </div>
              <div>
                <strong className="block text-black">Certificat</strong>
                Signé & numéroté
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}import React, { useState } from 'react';

const IMAGES = [
  '/banc-1.jpeg',
  '/banc-2.jpeg',
  '/banc-3.jpeg',
  '/banc-4.jpeg',
  '/banc-5.jpeg',
];

export function MobilierPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transformOrigin: 'center center',
    transform: 'scale(1)',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2.2)',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)',
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* GALERIE ET ZOOM */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div
            className="relative aspect-[4/3] bg-neutral-50 border border-neutral-200 overflow-hidden cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={IMAGES[currentIndex]}
              alt="Banc 250 - Eliotty Atelier"
              className="w-full h-full object-contain transition-transform duration-150 ease-out"
              style={zoomStyle}
            />
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-neutral-200 text-neutral-900 hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center font-mono text-sm z-10"
              aria-label="Photo précédente"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-neutral-200 text-neutral-900 hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center font-mono text-sm z-10"
              aria-label="Photo suivante"
            >
              &gt;
            </button>
          </div>

          {/* VIGNETTES */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {IMAGES.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Vignette ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`w-20 h-14 object-cover bg-neutral-50 border cursor-pointer transition-all duration-200 flex-shrink-0 ${
                  currentIndex === idx
                    ? 'border-black opacity-100'
                    : 'border-neutral-200 opacity-40 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS ET ACTION MARKETING */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Sur commande — Série limitée
            </div>

            <h1 className="text-3xl font-normal tracking-tight uppercase text-black mb-4">
              Banc 250
            </h1>

            <p className="text-neutral-600 text-sm leading-relaxed mb-8">
              Banc architectural d’exception de 2,50 m. Structure autoportante en multiplis de bouleau avec piètements évidés à motif stellaire, couronnée d'une assise thermolaquée en aluminium perforé. Allie légèreté visuelle et rigueur industrielle.
            </p>

            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-black mb-3 font-mono">
              Caractéristiques principales
            </h2>

            <dl className="divide-y divide-neutral-100 border-t border-b border-neutral-100 mb-8">
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Dimensions</dt>
                <dd className="text-black font-medium text-right">L 250 × l 50 × H 50 cm</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Assise</dt>
                <dd className="text-black font-medium text-right">Aluminium perforé</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Structure</dt>
                <dd className="text-black font-medium text-right">Multiplis Bouleau (CNC)</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Finition</dt>
                <dd className="text-black font-medium text-right">Vernis mat de protection</dd>
              </div>
              <div className="py-3 flex justify-between text-xs">
                <dt className="text-neutral-500 font-mono uppercase">Origine</dt>
                <dd className="text-black font-medium text-right">Fabriqué en Atelier</dd>
              </div>
            </dl>
          </div>

          {/* APPEL À L'ACTION (CTA) */}
          <div className="space-y-3 pt-2">
            <a
              href="mailto:contact@eliotty-atelier.com?subject=Demande%20de%20devis%20-%20Banc%20250"
              className="w-full flex justify-between items-center bg-black text-white px-6 py-4 text-xs font-mono font-semibold uppercase tracking-widest border border-black hover:bg-white hover:text-black transition-colors duration-200 shadow-sm"
            >
              <span>Demander un devis sur-mesure</span>
              <span>&rarr;</span>
            </a>

            <p className="text-center text-[11px] font-mono text-neutral-500">
              Réponse & fiche tarifaire envoyées sous 24h
            </p>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100 text-center text-[11px] text-neutral-500">
              <div>
                <strong className="block text-black">Sur-mesure</strong>
                Ajustements possibles
              </div>
              <div>
                <strong className="block text-black">Livraison</strong>
                Monde & Protection pro
              </div>
              <div>
                <strong className="block text-black">Certificat</strong>
                Signé & numéroté
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
