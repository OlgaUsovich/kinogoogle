import { useEffect } from "react";
import { MovieList } from "../../components";
import { getMovies } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ movies }) => movies);


  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch]);

  return (
    <MovieList
      movies={results}
      isLoading={isLoading}
      errorMessage={error}
    />
  );
};
