import { RootState } from "store";

export const getUserIsLoadingSelector = (state: RootState) => {
  return state.persistedReducer.users.isLoading;
};
