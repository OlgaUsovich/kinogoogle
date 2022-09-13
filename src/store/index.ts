import { addFavorite, removeFavorite } from "./features/favoritesSlice";
import { getMovie } from "./features/movieSlice";
import { addSearchWord, cleanStore, getMovies, getSearchMovies } from "./features/moviesSlice";
import { persistor, store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";

export { store, getMovies, getMovie, persistor, addFavorite, removeFavorite, useAppDispatch, useAppSelector, getSearchMovies, addSearchWord, cleanStore };
