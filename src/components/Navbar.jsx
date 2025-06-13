// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? 'text-white bg-blue-700 px-3 py-2 rounded-md'
      : 'text-white hover:bg-blue-600 px-3 py-2 rounded-md';

  return (
    <nav className="bg-blue-800 p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">
          Campus Club Finder
        </NavLink>
        <div className="flex space-x-4">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/clubs" className={navLinkClasses}>
            Clubs
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;