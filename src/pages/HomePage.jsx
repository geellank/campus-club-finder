// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 text-center rounded-lg shadow-xl mb-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
            Temukan Komunitasmu di Kampus
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Jelajahi beragam klub mahasiswa dan perkaya pengalaman universitasmu.
          </p>
          <img
            src="/images/hero-illustration.svg" // Pastikan gambar ini ada di public/images
            alt="Students enjoying campus life"
            className="mx-auto w-3/4 md:w-1/2 lg:w-1/3 mb-8 rounded-lg shadow-lg animate-zoom-in"
          />
          <Link
            to="/clubs"
            className="inline-block bg-white text-blue-800 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in"
          >
            Mulai Eksplorasi Klub
          </Link>
        </div>
      </section>

      {/* About Section Preview (Opsional, bisa dihapus jika terlalu mirip dengan halaman About) */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Tentang Campus Club Finder
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Campus Club Finder adalah platform inovatif yang dirancang untuk membantu mahasiswa menemukan dan terhubung dengan berbagai klub dan organisasi di kampus mereka. Kami percaya bahwa terlibat dalam kegiatan ekstrakurikuler adalah bagian integral dari pengalaman universitas yang holistik.
        </p>
        <Link
          to="/about"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-full text-md transition duration-300 ease-in-out"
        >
          Pelajari Lebih Lanjut
        </Link>
      </section>
    </>
  );
}

export default HomePage;