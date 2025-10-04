import React from 'react';

export default function NodespecLanding() {
  return (
    <div className="flex min-h-screen bg-black text-white items-center justify-center">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[430px] h-[430px] bg-gray-900 rounded-[32px] overflow-hidden shadow-lg flex items-center justify-center">
          <img
            src="/image.png"
            alt="Nodespec Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 pl-14 max-w-xl">
        <img
          src="/nodespec.png"
          alt="Nodespec logo"
          className="h-14 mb-8"
        />
        <h1 className="text-4xl font-bold mb-6">
          Freelance Web Agency
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          We help businesses and entrepreneurs build fast, modern websites.<br />
          Nodespec is your dedicated partner for web development, custom solutions, and digital growth.<br />
          Work with our expert freelance team to create your next successful online presence.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-4 rounded-lg shadow transition-colors duration-200 mt-2">
          Contact Us
        </button>
      </div>
    </div>
  );
}
