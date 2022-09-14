import { RootState } from "store";

export const getUserInfoSelector = (state: RootState) => {
  return state.persistedReducer.users.result;
};
