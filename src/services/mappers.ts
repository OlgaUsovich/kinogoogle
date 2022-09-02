import { IMovie, IMovieAPI, ISearchMovie, ISearchMovieAPI } from "../types";

export const transformMovie = (movie: IMovieAPI): IMovie => {
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

export const transformSearchMovie = (
  searchMovies: ISearchMovieAPI[]
): ISearchMovie[] => {
  return searchMovies.map((searchMovie) => {
    return {
      title: searchMovie.Title,
      year: searchMovie.Year,
      imdbID: searchMovie.imdbID,
      type: searchMovie.Type,
      poster: searchMovie.Poster,
    };
  });
};
