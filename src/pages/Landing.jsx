import React from "react";

function Landing({ scrollToCategories }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-cyan-500 to-pink-500 px-4 text-center md:text-left">
      <h1 className="text-4xl md:text-7xl font-bold text-white font-bebas">
        Welcome to GameGrid
      </h1>
      <p className="mt-4 text-lg md:text-2xl font-bebas">
        Your one-stop shop for all gaming needs!
      </p>
      <button
        className="mt-8 bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-pink-500 hover:text-white transition duration-300"
        onClick={scrollToCategories}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Landing;
