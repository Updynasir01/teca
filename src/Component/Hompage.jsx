import React from 'react';

function Homepage () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 text-center">
        Welcome to Our Advertising Business
      </h1>
      <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
        We provide the best advertising services to grow your business!
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
        Advertise Now
      </button>
    </div>
  );
};

export default Homepage;
