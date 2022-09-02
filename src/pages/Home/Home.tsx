import { useEffect, useState } from "react";
import { MovieList } from "../../components";
import {
  movieAPI,
  MovieRequestParams,
  transformSearchMovie,
} from "../../services";
import { ISearchMovie, ISearchMovieListAPI } from "../../types";

export const Home = () => {
  const [movies, setMovies] = useState<ISearchMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestParams, setRequestParams] = useState<MovieRequestParams>({});

  useEffect(() => {
    setIsLoading(true);
    movieAPI
      .getAll(requestParams)
      .then((response: ISearchMovieListAPI) => {
        const movies = transformSearchMovie(response["Search"]);
        setMovies(movies);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  }, [requestParams]);

  return (
    <MovieList
      movies={movies}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};
