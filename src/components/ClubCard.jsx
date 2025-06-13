// src/components/ClubCard.jsx
import { Link } from 'react-router-dom';

function ClubCard({ club }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {club.shortDescription}
        </p>
        <Link
          to={`/clubs/${club.id}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300 ease-in-out"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}

export default ClubCard;