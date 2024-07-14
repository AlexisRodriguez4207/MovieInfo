import placeholder from "../img/MovieNotFound.png";

export default function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}

// const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
