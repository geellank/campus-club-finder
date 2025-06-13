// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-lg text-gray-600 mb-8">
        Maaf, halaman yang Anda cari tidak ada.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
      >
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}

export default NotFoundPage;