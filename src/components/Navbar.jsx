import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold cursor-pointer">
          AI Job Navigator
        </Link>
        <ul className="flex space-x-4 text-white">
          <Link to="/" className="hover:underline cursor-pointer">
            Home
          </Link>
          <Link to="/dashboard" className="hover:underline cursor-pointer">
            Dashboard
          </Link>
          <li className="hover:underline cursor-pointer">Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
