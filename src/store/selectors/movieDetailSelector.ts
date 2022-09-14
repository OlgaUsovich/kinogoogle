import { RootState } from "store";


export const getMovieDetailSelector = (state: RootState) => {
  return state.persistedReducer.movie;
};