// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          Tentang Campus Club Finder
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Campus Club Finder adalah platform yang didedikasikan untuk menjembatani kesenjangan antara mahasiswa dan beragam klub serta organisasi yang semarak di kampus mereka. Kami percaya bahwa pengalaman universitas sejati melampaui batas-batas akademik, dan keterlibatan dalam kegiatan ekstrakurikuler adalah kunci untuk mengembangkan keterampilan baru, membangun koneksi yang bermakna, dan menemukan minat baru.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Misi kami adalah menyederhanakan proses penemuan klub, memungkinkan setiap mahasiswa untuk dengan mudah menjelajahi berbagai pilihan yang tersedia, dari klub robotika hingga perkumpulan seni, kelompok aksi lingkungan hingga drama guild. Kami bertujuan untuk menumbuhkan komunitas kampus yang lebih terhubung dan dinamis di mana setiap orang dapat menemukan tempat mereka.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi Kami</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Menjadi sumber daya utama bagi mahasiswa yang mencari keterlibatan di kampus, memberdayakan mereka untuk menemukan komunitas yang tepat yang mendorong pertumbuhan pribadi dan akademis.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Punya pertanyaan atau ingin klubmu terdaftar? Jangan ragu untuk menghubungi kami di{' '}
          <a href="mailto:info@campusclubfinder.com" className="text-blue-600 hover:underline">info@campusclubfinder.com</a>.
        </p>
        <div className="text-center">
          <Link
            to="/clubs"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
          >
            Mulai Temukan Klubmu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;