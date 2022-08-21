import { IMovie } from "../pages/Home/Home";

export const transformMovie = (movie: any): IMovie => {
  return {
    imdbID: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    released: movie.Released,
    runtime: movie.Runtime,
    genre: movie.Genre.split(", "),
    director: movie.Director,
    writer: movie.Writer,
    actors: movie.Actors,
    plot: movie.Plot,
    country: movie.Country,
    poster: movie.Poster,
    imdbRating: movie.imdbRating,
    type: movie.Type,
    boxOffice: movie.BoxOffice,
    production: movie.Production,
  };
};
