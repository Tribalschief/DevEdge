import React from 'react'
import Image from "next/image";
import map from '@/public/map.jpg'
export const Tech = () => {
  return <ImageGrid/>
}

export default function ImageGrid() {
  const logos = [
    "react.svg",
    "nextjs.svg",
    "tailwind.svg",
    "nodejs.svg",
    "typescript.svg",
    "github.svg",
    "figma.svg",
    "vercel.svg",
    "aws.svg",
    "docker.svg",
    "firebase.svg",
    "redux.svg",
    "graphql.svg",
    "html5.svg",
    "css3.svg",
    "javascript.svg",
    "vite.svg",
    "express.svg",
    "postgresql.svg",
    "mongodb.svg",
    "sanity.svg",
  ];

  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background World Map */}
      <Image
        src={map}
        alt="world map"
        width={700}
        height={700}
        className="absolute opacity-5 z-0"
      />

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center z-10 mb-10">
        Technologies That <span className="text-purple-600">Power</span> Our Solutions
      </h2>

      {/* Logo Grid */}
      <div className="grid grid-cols-6 sm:grid-cols-4 md:grid-cols-8 gap-6 z-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="p-20 sm:w-20 sm:h-20 bg-gray-100 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={`/icons/${logo}`}
              alt={logo.replace(".svg", "")}
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

