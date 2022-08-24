import { useEffect, useState } from "react";
import { MovieList } from "../../components";
import { movieAPI, MovieRequestParams, transformMovie } from "../../services";
import { IMovie } from "../../types";

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestParams, setRequestParams] = useState<MovieRequestParams>({});

  useEffect(() => {
    setIsLoading(true);
    movieAPI
      .getAll(requestParams)
      .then((response) => {
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
