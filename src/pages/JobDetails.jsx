import React from "react";
import { useParams, useLocation } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams(); // Job ID from URL
  const location = useLocation(); // Access passed state
  const job = location.state?.job; // Retrieve job details

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
          {job.description || "No description available for this job."}
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Salary</h2>
        <p className="text-green-500">
          {job.job_min_salary
            ? `$${job.job_min_salary} - $${job.job_max_salary}`
            : "Not provided"}
        </p>
      </div>

      {job.job_apply_link ? (
        <a
          href={job.apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 px-6 py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600"
        >
          Apply Now
        </a>
      ) : (
        <p className="text-gray-500 mt-6">Application link not available.</p>
      )}
    </div>
  );
};

export default JobDetails;
