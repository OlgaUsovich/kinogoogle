import { addFavorite, removeFavorite } from "./features/favoritesSlice";
import { getMovie } from "./features/movieSlice";
import { getMovies } from "./features/moviesSlice";
import { persistor, store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";

export { store, getMovies, getMovie, persistor, addFavorite, removeFavorite, useAppDispatch, useAppSelector };
