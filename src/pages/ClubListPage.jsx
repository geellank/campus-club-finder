// src/pages/ClubListPage.jsx
import React, { useState, useEffect } from 'react'; // Impor useState dan useEffect
import ClubCard from '../components/ClubCard';
import { clubs } from '../data/clubs';

function ClubListPage() {
  const [searchTerm, setSearchTerm] = useState(''); // State untuk menyimpan teks pencarian
  const [filteredClubs, setFilteredClubs] = useState(clubs); // State untuk menyimpan klub yang sudah difilter

  // Efek untuk memfilter klub setiap kali searchTerm berubah
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = clubs.filter(
      (club) =>
        club.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        club.shortDescription.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredClubs(results);
  }, [searchTerm]); // Bergantung pada searchTerm

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm(''); // Mengosongkan teks pencarian
  };

  return (
    <div className="py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
        Temukan Klub Impianmu
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
        Jelajahi berbagai klub menarik di kampus kami.
      </p>

      {/* Bagian Pencarian */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Cari klub..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && ( // Tampilkan tombol hapus hanya jika ada searchTerm
          <button
            onClick={handleClearSearch}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Grid untuk menampilkan ClubCard */}
      {filteredClubs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club) => ( // Gunakan filteredClubs
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600 mt-12">
          Tidak ada klub yang cocok dengan pencarian Anda.
        </p>
      )}
    </div>
  );
}

export default ClubListPage;