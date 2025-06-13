// src/pages/ClubDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { clubs } from '../data/clubs'; // Impor data klub

function ClubDetailPage() {
  const { clubId } = useParams(); // Mengambil ID klub dari URL (misal: 'robotics')

  // Mencari data klub yang sesuai dengan clubId
  const club = clubs.find(c => c.id === clubId);

  // Jika klub tidak ditemukan (misal: URL salah), tampilkan pesan 404 atau redirect
  if (!club) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Klub Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">
          Maaf, klub yang Anda cari tidak ada.
        </p>
        <Link
          to="/clubs"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
        >
          Kembali ke Daftar Klub
        </Link>
      </div>
    );
  }

  // Jika klub ditemukan, tampilkan detailnya
  return (
    <div className="py-8">
      <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {club.name}
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          {club.description}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Acara Mendatang</h2>
        {club.events && club.events.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {club.events.map((event, index) => (
              <li key={index} className="text-md">
                <span className="font-semibold">{event.name}</span> -{' '}
                {new Date(event.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 italic">Belum ada acara yang dijadwalkan.</p>
        )}

        <div className="mt-8">
          <Link
            to="/clubs"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali ke Daftar Klub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClubDetailPage;