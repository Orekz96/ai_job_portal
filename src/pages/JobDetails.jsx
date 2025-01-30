import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const job = location.state?.job;

  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
  }, []);

  const saveJob = () => {
    const updatedJobs = [...savedJobs, job];
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    alert("Job saved successfully! 🎉");
  };

  if (!job) {
    return <p className="text-center text-red-500">Job details not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-lg text-gray-700">{job.employer_name}</p>
      <p className="text-gray-500">{job.location || "Remote"}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="text-gray-600">
          {job.description || "No description available."}
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Salary</h2>
        <p className="text-green-500">
          {job.min_salary
            ? `$${job.min_salary} - $${job.max_salary}`
            : "Not provided"}
        </p>
      </div>

      <button
        onClick={saveJob}
        className="mt-6 px-6 py-3 bg-indigo-500 text-white text-center rounded-lg hover:bg-indigo-600"
      >
        Save Job
      </button>
    </div>
  );
};

export default JobDetails;
