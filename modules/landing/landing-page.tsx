import React from 'react';
export default function NodespecLanding() {
  return (
    <div className="flex min-h-screen bg-black text-white items-center justify-center px-4">
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[370px] h-[370px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
          <img
            src="/image.png"
            alt="Freelance Developer Working"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center pl-10 max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Build Your Online Presence
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold opacity-80 mb-4">
          Professional Websites. Freelance Expertise.
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed">
          Get custom websites built fast. Nodespec is a freelance web agency helping startups and businesses launch with confidence. From landing pages to SaaS platforms—we turn your ideas into reality.
        </p>
        <ul className="text-sm md:text-base text-gray-200 space-y-2 mb-5">
          <li className="flex items-center">
            <span className="mr-2 text-blue-400">✔️</span>
            Idea to production launch.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-400">✔️</span>
            Support, maintenance & growth.
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200 mt-2 w-fit">
          Get Started
        </button>
      </div>
    </div>
  );
}
