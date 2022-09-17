import { useCallback, useEffect, useState } from "react";
import { getFavoritesSelector, useAppSelector } from "store";
import { IMovie } from "types";
import { filterFavorites } from "utils";

export const useSearch = () => {
  const { favorites } = useAppSelector(getFavoritesSelector);
  const [favoritesToRender, setFavoritesToRender] = useState<IMovie[]>(favorites);
  const searchFavorites = useCallback(
    (searchWord: string | undefined, type: string | undefined, year: string | undefined): void => {
      setFavoritesToRender(() => {
        return filterFavorites(favorites, searchWord, type, year);
      });
    },
    [favorites],
  );

  useEffect(() => {
    setFavoritesToRender(favorites);
  }, [favorites]);

  return {
    favoritesToRender,
    searchFavorites,
  };
};
