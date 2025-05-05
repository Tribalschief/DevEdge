import React from 'react';
import Image from "next/image"; // Keep for background map
import map from '@/public/map.jpg';

// --- SVGs are now imported as components ---
import A from '@/public/tech/a.svg';
import B from '@/public/tech/b.svg';
import C from '@/public/tech/c.svg';
import D from '@/public/tech/d.svg';
import E from '@/public/tech/e.svg';
import F from '@/public/tech/f.svg';
import G from '@/public/tech/g.svg';
import H from '@/public/tech/h.svg';
import K from '@/public/tech/k.svg';
import L from '@/public/tech/l.svg';
import N from '@/public/tech/n.svg';    
import O from '@/public/tech/o.svg';
import P from '@/public/tech/p.svg';
import Q from '@/public/tech/q.svg';
import R from '@/public/tech/r.svg';
import S from '@/public/tech/s.svg';
import T from '@/public/tech/t.svg';
import U from '@/public/tech/u.svg';  
import V from '@/public/tech/v.svg';
import X from '@/public/tech/x.svg';
import Y from '@/public/tech/y.svg';


export const Tech = () => {
  return <ImageGrid />;
};

export default function ImageGrid() {
   // The array now holds React components
  const Logos = [
    A, B, C, D, E, F, G, H, K, L, N, O, P, Q, R, S, T, U, V, X, Y
  ];


  return (
    <div className="relative bg-slate-900 h-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background World Map */}
      <Image
        src={map}
        alt="world map"
        fill // Use fill for background images if layout allows
        style={{ objectFit: 'cover' }} // or contain
        className="absolute opacity-5 z-0" // Lower opacity if needed
      />

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center z-10 mb-10">
        Technologies That <span className="text-purple-600">Power</span> Our Solutions
      </h2>

      {/* Logo Grid */}
      {/* Adjusted grid columns for better responsiveness potentially */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-11 gap-4 z-10 w-full max-w-5xl">
        {Logos.map((logo, index) => (
          <div
            key={index}
            className="p-3 bg-gray-100 bg-opacity-80 rounded-lg shadow-sm flex items-center justify-center aspect-square hover:scale-105 transition-transform duration-300"
          >
            {/* --- Use standard <img> tag --- */}
            <img
              // --- IMPORTANT: Check console.log output ---
              // If logo is already the string path, use: src={logo}
              // If logo is an object like { src: '...' }, use: src={logo.src}
              src={logo.src} // MODIFY THIS LINE BASED ON YOUR console.log
              alt={`Tech logo ${index + 1}`}
              width={40} // Set desired display width
              height={40} // Set desired display height
              className="object-contain" // Ensure aspect ratio is maintained
              loading="lazy" // Add lazy loading manually if desired
            />
          </div>
        ))}
      </div>
    </div>
  );
}