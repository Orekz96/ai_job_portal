import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
// import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<ResultsPage />} />
        {/* <JobCard /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
