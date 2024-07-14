import { useEffect, useState } from "react";
import { getMovies } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../styles/ContextMovieCard.css";

export default function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    getMovies("/discover/movie").then((data) => {
      SetMovies(data.results);
      console.log(data);
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
