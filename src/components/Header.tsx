import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/home" className="text-gray-900 font-light text-xl">
          Eliott Goyeau
        </Link>
        <div className="space-x-8">
          <Link to="/vrac" className="px-3 py-1 border border-black hover:bg-black hover:text-white transition-colors">
            Vrac
          </Link>
        </div>
      </nav>
    </header>
  );
}
