import { useSearch } from "hooks";
import { useEffect } from "react";
import { getFavoritesSelector, getMoviesSelector, useAppSelector } from "store";
import { filterFavorites } from "utils";
import { EmptyPage, MovieList } from "components";
import { Container } from "./styles";

export const Favourits = () => {
  const { favorites } = useAppSelector(getFavoritesSelector);
  const { searchWord, type, year } = useAppSelector(getMoviesSelector);

  const { favoritesToRender, searchFavorites } = useSearch();

  useEffect(() => {
    searchFavorites(searchWord, type, year);
  }, [searchFavorites, searchWord, type, year]);

  const filteredFAvorites = filterFavorites(favorites, searchWord, type, year);

  if (filteredFAvorites.length) {
    return (
      <Container>
        <MovieList movies={favoritesToRender} />
      </Container>
    );
  }

  return <EmptyPage />;
};
