import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

const ResultsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all",
          {
            params: { query: "software developer", location: "remote" },
            headers: {
              "X-RapidAPI-Key":
                "6155c93343msh8d6197cb8e6e010p133253jsn180fd07bebea",
              "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
          }
        );
        console.log("Job Data:", response.data);
        setJobs(response.data.data); // Update based on API structure

        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Job Results</h1>
      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard
              key={job.job_id}
              job={{
                title: job.job_title,
                company: job.employer_name,
                location: job.job_location || "Remote",
                description: job.job_description,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;

// import React, { useState, useEffect } from "react";
// import JobCard from "../components/JobCard";
// // import axios from "axios";

// const ResultsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // curl --request GET \
//   // --url https://linkedin-job-search-api.p.rapidapi.com/active-jb-24h \
//   // --header 'x-rapidapi-host: linkedin-job-search-api.p.rapidapi.com' \
//   // --header 'x-rapidapi-key: 6155c93343msh8d6197cb8e6e010p133253jsn180fd07bebea'

// //   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/posts")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const formattedJobs = data.slice(0, 5).map((job, index) => ({
// //           id: job.id,
// //           title: `Job Title ${index + 1}`,
// //           company: `Company ${index + 1}`,
// //           location: "Remote",
// //         }));
// //         setJobs(formattedJobs);
// //       });
// //   }, []);

// //   return (
// //     <div className="p-4 bg-gray-100">
// //       <h1 className="text-3xl font-bold mb-4">Job Results</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {jobs.map((job) => (
// //           <JobCard key={job.id} job={job} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// export default ResultsPage;
