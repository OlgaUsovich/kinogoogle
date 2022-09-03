import { useEffect, useState } from "react";
import { MovieList, PaginateButton } from "../../components";
import { getMovies } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container } from "./styles";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ movies }) => movies);
  const [page, setPage] = useState<string>("1");

  useEffect(() => {
    dispatch(getMovies({ page }));
  }, [dispatch, page]);

  const handlePagination = () => {
    setPage(`${+page + 1}`);
  };

  return (
    <Container>
      <MovieList movies={results} isLoading={isLoading} errorMessage={error} />
      <PaginateButton onClick={handlePagination} />
    </Container>
  );
};
