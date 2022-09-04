import { useEffect, useState } from "react";
import { MovieList, PaginateButton } from "../../components";
import { cleanStore, getTrends } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container } from "./styles";

export const Trends = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ movies }) => movies);
  const [page, setPage] = useState<string>("1");

  useEffect(() => {
    dispatch(getTrends({ page }));
  }, [page, dispatch]);
  
  useEffect(() => {
    dispatch(cleanStore()); // <-- reset when unmounting
  }, []);

  const handlePagination = () => {
    setPage(`${+page + 1}`);
  };

  return (
    <Container>
      <MovieList movies={results} isLoading={isLoading} errorMessage={error} />
      <PaginateButton onClick={handlePagination} />
    </Container>
  );
}
