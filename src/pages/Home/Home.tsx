import { useEffect, useState } from "react";
import { MovieList, PaginateButton } from "components";
import { Container } from "./styles";
import * as store from "store";

export const Home = () => {
  const dispatch = store.useAppDispatch();
  const { results, isLoading, error, searchWord, year, type, moviesCount } = store.useAppSelector(
    store.getMoviesSelector,
  );
  const [page, setPage] = useState<string>("1");

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
