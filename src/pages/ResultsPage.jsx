import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
// import axios from "axios";

const ResultsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const formattedJobs = data.slice(0, 5).map((job, index) => ({
          id: job.id,
          title: `Job Title ${index + 1}`,
          company: `Company ${index + 1}`,
          location: "Remote",
        }));
        setJobs(formattedJobs);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Job Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
