import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
  }, []);

  const removeJob = (jobId) => {
    const updatedJobs = savedJobs.filter((job) => job.job_id !== jobId);
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Saved Jobs</h1>
      {savedJobs.length === 0 ? (
        <p className="text-gray-600">No saved jobs yet.</p>
      ) : (
        <ul>
          {savedJobs.map((job) => (
            <li key={job.job_id} className="mb-4 p-4 border rounded-lg shadow">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.employer_name}</p>
              <p className="text-gray-500">{job.location || "Remote"}</p>
              <button
                onClick={() => removeJob(job.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
