import { useSearch } from "hooks";
import { useEffect, useState } from "react";
import { getFavoritesSelector, getMoviesSelector, useAppSelector } from "store";
import { filterFavorites } from "utils";
import { EmptyPage, MovieList, PaginateButton } from "components";
import { Container } from "./styles";

export const Favourits = () => {
  const { favorites } = useAppSelector(getFavoritesSelector);
  const { searchWord, type, year } = useAppSelector(getMoviesSelector);

  const { favoritesToRender, searchFavorites } = useSearch();
  const [page, setPage] = useState<string>("1");

  const handlePagination = () => {
    setPage(`${+page + 1}`);
  };

  useEffect(() => {
    searchFavorites(searchWord, type, year);
  }, [searchFavorites, searchWord, type, year]);

  const filteredFAvorites = filterFavorites(favorites, searchWord, type, year);

  const calcPages = () => {
    return Math.ceil(favoritesToRender.length / 10);
  };

  const paginatedFavourites = favoritesToRender.slice(0, +page * 10);

  if (filteredFAvorites.length) {
    return (
      <Container>
        <MovieList movies={paginatedFavourites} />
        {paginatedFavourites && calcPages() > 1 && calcPages() !== +page && (
          <PaginateButton onClick={handlePagination} isLoading={false} />
        )}
      </Container>
    );
  }

  return <EmptyPage />;
};
