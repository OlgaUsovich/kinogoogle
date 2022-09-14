import { RootState } from "store";

export const getUsersSelector = (state: RootState) => {
  return state.persistedReducer.users;
};
