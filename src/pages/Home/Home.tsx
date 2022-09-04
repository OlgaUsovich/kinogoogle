import { useEffect, useState } from "react";
import { MovieList, PaginateButton } from "../../components";
import { getMovies } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Container } from "./styles";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ movies }) => movies);
  const [page, setPage] = useState<string>("1");
  const [windowHeight, setWindowHeigth] = useState<number>(906);
  

  useEffect(() => {
    if (page!== '1' || !results.length){
      dispatch(getMovies({ page }));
    }
  }, [page, dispatch]);

  const handlePagination = () => {
    setPage(`${+page + 1}`);
    window.scrollTo({
      top: windowHeight,
      behavior: "smooth",
    });
    setWindowHeigth((prev) => 2 * prev);
  };

  return (
    <Container>
      <MovieList movies={results} isLoading={isLoading} errorMessage={error} />
      <PaginateButton onClick={handlePagination} />
    </Container>
  );
};
