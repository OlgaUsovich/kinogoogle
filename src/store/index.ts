import { addFavorite, removeFavorite } from "./features/favoritesSlice";
import { getMovie } from "./features/movieSlice";
import {
  addSearchParams,
  addSearchWord,
  cleanStore,
  clearSearchParams,
  getMovies,
  getSearchMovies,
} from "./features/moviesSlice";
import { persistor, store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";

export {
  store,
  getMovies,
  getMovie,
  persistor,
  addFavorite,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
  getSearchMovies,
  addSearchWord,
  cleanStore,
  addSearchParams,
  clearSearchParams
};
