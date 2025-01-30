import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import JobDetails from "./pages/JobDetails";
// import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import ResultsPage from "./pages/ResultsPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <JobCard /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
