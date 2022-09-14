import { addFavorite, removeFavorite } from "./features/favoritesSlice";
import { getMovie } from "./features/movieSlice";
import {
  addSearchParams,
  addSearchWord,
  cleanStore,
  clearSearchParams,
  getMovies,
  getSearchMovies,
  getTrends,
  MoviesState,
} from "./features/moviesSlice";
import { persistor, RootState, store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  getFavoritesSelector,
  getMovieDetailSelector,
  getMoviesSelector,
  getUserInfoSelector,
  getUserIsLoadingSelector,
  getUsersSelector,
} from "./selectors";
import {
  changeEmail,
  changeName,
  changePassword,
  changeTheme,
  createUser,
  logInUser,
  resetPassword,
  sendResetEmail,
  setTheme,
} from "./features/userSlice";

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
  clearSearchParams,
  getMoviesSelector,
  getUserInfoSelector,
  getFavoritesSelector,
  getUserIsLoadingSelector,
  getMovieDetailSelector,
  getUsersSelector,
  changeEmail,
  changeName,
  changePassword,
  setTheme,
  changeTheme,
  createUser,
  getTrends,
  logInUser,
  resetPassword,
  sendResetEmail
};

export type { RootState, MoviesState };
