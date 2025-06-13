// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Kita akan membuat komponen-komponen ini nanti
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ClubListPage from './pages/ClubListPage';
import ClubDetailPage from './pages/ClubDetailPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer'; // <-- Tambahkan ini

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar akan selalu terlihat di semua halaman */}
      <main className="container mx-auto p-4 pt-20"> {/* Tambahkan padding-top untuk Navbar tetap di atas */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Rute untuk Halaman Home */}
          <Route path="/clubs" element={<ClubListPage />} /> {/* Rute untuk Daftar Klub */}
          <Route path="/clubs/:clubId" element={<ClubDetailPage />} /> {/* Rute untuk Detail Klub (dinamis) */}
          <Route path="/about" element={<AboutPage />} /> {/* Rute untuk Halaman About */}
          <Route path="*" element={<NotFoundPage />} /> {/* Rute untuk halaman 404 Not Found */}
        </Routes>
      </main>
      <Footer /> {/* <-- Tambahkan ini */}
    </Router>
  );
}

export default App;