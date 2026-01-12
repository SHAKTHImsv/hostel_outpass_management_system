import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-blue-600 shadow-md">
      {/* Brand Section */}
      <div className="navbar-brand">
        <h1 className="text-xl font-bold text-white tracking-tight">
          Admin Dashboard
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-6">
        <li>
          <Link 
            to="/outpass" 
            className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            style={{textDecoration:'none'}}
          >
            View Outpasses
          </Link>
        </li>
        <li>
          <Link 
            to="/queries" 
            className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            style={{textDecoration:'none'}}
          >
            View Queries
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;