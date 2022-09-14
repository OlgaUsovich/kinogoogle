import { RootState } from "store";

export const getFavoritesSelector = (state: RootState) => {
  return state.persistedReducer.favorites;
};
