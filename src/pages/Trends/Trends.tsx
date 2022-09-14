import { useEffect, useState } from "react";
import {
  cleanStore,
  getMoviesSelector,
  getTrends,
  MoviesState,
  useAppDispatch,
  useAppSelector,
} from "store";
import { MovieList, PaginateButton } from "../../components";
import { Container } from "./styles";

export const Trends = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error, moviesCount }: MoviesState = useAppSelector(getMoviesSelector);
  const [page, setPage] = useState<string>("1");

  useEffect(() => {
    dispatch(getTrends({ page }));
  }, [page, dispatch]);

  useEffect(() => {
    dispatch(cleanStore()); // <-- reset when unmounting
  }, [dispatch]);

  const handlePagination = () => {
    setPage(`${+page + 1}`);
  };

  return (
    <Container>
      <MovieList movies={results} isLoading={isLoading} errorMessage={error} />
      <PaginateButton
        onClick={handlePagination}
        disabled={moviesCount ? results.length === +moviesCount : false}
      />
    </Container>
  );
};
