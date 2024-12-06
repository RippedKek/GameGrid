import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold font-bebas text-cyan-500">About GameGrid</h2>
          <p className="mt-4 text-gray-400 text-justify text-josefin-sans">
            GameGrid is your one-stop shop for all things gaming. Whether you're a PC gamer, console player, or just browsing, we've got you covered with the latest games and accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold font-bebas text-pink-500">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#shop" className="text-gray-400 hover:text-white transition">Shop</a></li>
            <li><a href="#categories" className="text-gray-400 hover:text-white transition">Categories</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-2xl font-bold font-bebas text-cyan-500">Follow Us</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        <p>&copy; 2024 GameGrid. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
