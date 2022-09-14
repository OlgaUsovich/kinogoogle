import { useEffect, useState } from "react";
import { MovieList, PaginateButton } from "../../components";
import * as store from "../../store";
import { Container } from "./styles";

export const Home = () => {
  const dispatch = store.useAppDispatch();
  const { results, isLoading, error, searchWord, year, type, moviesCount } = store.useAppSelector(
    (state) => state.persistedReducer.movies,
  );
  const [page, setPage] = useState<string>("1");
  const [windowHeight, setWindowHeigth] = useState<number>(906);

  useEffect(() => {
    if (!["", undefined].includes(searchWord)) {
      dispatch(store.getSearchMovies({ s: searchWord, page, y: year, type }));
    } else if (searchWord === "") {
      dispatch(store.getMovies({ page }));
    }
  }, [searchWord, page, dispatch, year, type]);

  useEffect(() => {
    dispatch(store.cleanStore());
  }, [dispatch, searchWord]);

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
      <PaginateButton
        onClick={handlePagination}
        disabled={moviesCount ? results.length === +moviesCount : false}
      />
    </Container>
  );
};
