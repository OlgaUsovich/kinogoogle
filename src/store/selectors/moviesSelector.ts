import { RootState } from "store";


export const getMoviesSelector = (state: RootState) => {
  return state.persistedReducer.movies;
};
