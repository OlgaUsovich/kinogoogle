import { useEffect, useState } from "react";
import { MovieList, PaginateButton } from "../../components";
import * as store from "../../store";
import { Container } from "./styles";
import { movieAPI } from "../../services";

export const Home = () => {
  const dispatch = store.useAppDispatch();
  const { results, isLoading, error, searchWord } = store.useAppSelector(
    (state) => state.persistedReducer.movies
  );
  const [page, setPage] = useState<string>("1");
  const [windowHeight, setWindowHeigth] = useState<number>(906);

  useEffect(() => {
    dispatch(store.getMovies({ page }));
  }, [page, dispatch]);

  useEffect(() => {
    dispatch(store.cleanStore());
    if (searchWord !== "") {
      dispatch(store.getSearchMovies({ s: searchWord, page }));
    } else {
      dispatch(store.addSearchWord(movieAPI.getRandomParam()));
    }
  }, [searchWord, dispatch]);

  useEffect(() => {
    dispatch(store.cleanStore()); // <-- reset when unmounting
  }, []);

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
