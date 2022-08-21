import { useEffect, useState } from "react";
import { MovieList } from "../../components";
import { movieAPI, MovieRequestParams, transformMovie } from "../../services";

export interface IMovie {
  title: string;
  year: string;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string[];
  actors: string[];
  plot: string;
  country: string;
  poster: string;
  imdbRating: string;
  imdbID: string;
  type: string;
  boxOffice: string;
}

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestParams, setRequestParams] = useState<MovieRequestParams>({});

  useEffect(() => {
    movieAPI
      .getAll(requestParams)
      .then((response) => {
        setIsLoading(false);
        let fetchedMovies = response["Search"]
        setMovies(fetchedMovies);
        fetchedMovies.forEach((movie: any) => {
          movieAPI.getById(movie.imdbID).then((response) => {
            setMovies((previousMovies) => {
              const transformedMovie = transformMovie(response);
              return previousMovies.map((el) => (el.imdbID === transformedMovie.imdbID ? transformedMovie : el));
            });
          });
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  }, [requestParams]);

  return (
    <MovieList movies={movies} isLoading={isLoading} errorMessage={errorMessage} />
  );
};
