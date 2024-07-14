import { useParams } from "react-router-dom";
import { getMovies } from "../data/httpClient";
import { useEffect, useState } from "react";
import getMovieImg from "../utils/getMovieImg";
import "../styles/MovieDetails.css";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovies("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenres(data.genres.slice(0, 3));
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="col moviePoster" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p className="Genres">
          <strong>Genres:</strong>

          {genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="Overview">
          <strong>Overview: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
