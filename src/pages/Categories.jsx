import React from "react";
import { FaDesktop, FaPlaystation, FaXbox } from "react-icons/fa";

function Categories() {
  const categories = [
    { name: "PC", icon: <FaDesktop size={64} className="text-cyan-500" /> },
    {
      name: "PS5/PS4",
      icon: <FaPlaystation size={64} className="text-white" />,
    },
    { name: "XBOX", icon: <FaXbox size={64} className="text-green-500" /> },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl text-center font-bold mb-8 font-bebas">
        Choose Your Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            {category.icon}
            <h3 className="mt-4 text-xl font-bold font-josefin-sans">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
