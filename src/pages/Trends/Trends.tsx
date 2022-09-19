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
  const { results, isLoading, error, moviesCount, searchWord, type }: MoviesState =
    useAppSelector(getMoviesSelector);
  const [page, setPage] = useState<string>("1");

  useEffect(() => {
    if (searchWord !== undefined) {
      dispatch(getTrends({ page, s: searchWord, type }));
    }
  }, [page, dispatch, searchWord, type]);

  useEffect(() => {
    dispatch(cleanStore()); // <-- reset when unmounting
  }, [dispatch, searchWord, type]);

  const handlePagination = () => {
    setPage(`${+page + 1}`);
  };

  return (
    <Container>
      <MovieList movies={results} isLoading={isLoading} errorMessage={error} />
      {moviesCount && results.length < +moviesCount && (
        <PaginateButton onClick={handlePagination} isLoading={isLoading} />
      )}
    </Container>
  );
};
