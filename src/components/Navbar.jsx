import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AI Job Navigator</h1>
        <ul className="flex space-x-4 text-white">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
