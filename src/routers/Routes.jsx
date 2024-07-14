import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import MovieDetails from "../Pages/MovieDetails";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/details/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
