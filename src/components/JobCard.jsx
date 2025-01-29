import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.job_id}`, { state: { job } });
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500 text-sm">{job.location}</p>
      <p className="text-gray-500 text-sm">{job.job_description}</p>
      <button
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        onClick={handleClick}
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;
