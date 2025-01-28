import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/results");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">AI Job Navigator</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your gateway to smarter job searches.
      </p>
      <div className="mt-6 mb-6">
        <input
          type="text"
          placeholder="Enter skills or job titles"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 w-full sm:w-auto"
        />
        <button className="ml-4 px-6 py-2 text-white bg-indigo-500 rounded-lg shadow hover:bg-indigo-600">
          Find Jobs
        </button>
      </div>

      <div>
        <button
          className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
          onClick={handleNavigate}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
          <span>Go to available results</span>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
