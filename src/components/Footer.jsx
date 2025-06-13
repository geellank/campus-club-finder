// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 shadow-lg">
      <div className="container mx-auto text-center px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-4">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          <Link to="/clubs" className="hover:text-blue-400 transition duration-300 mt-2 md:mt-0">Clubs</Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300 mt-2 md:mt-0">About</Link>
          {/* Tambahkan link lain jika ada */}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Campus Club Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;