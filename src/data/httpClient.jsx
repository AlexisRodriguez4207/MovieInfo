const API_URL = "https://api.themoviedb.org/3";

export function getMovies(path) {
  return fetch(API_URL + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjMzNDhlYTZhODlkZTQ4YmM5M2Q4ZTg5M2E2ZTQ5ZiIsIm5iZiI6MTcyMDk4Mzk1MS40NTE0ODgsInN1YiI6IjYyOTZmOGYzZmQ2ZmExMDA2NjZiNTZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xTUnYDjg54Bu1vmkVBlBYE7kjiuGjagjUhk2_1mfYM",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
