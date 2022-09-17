import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "types";

interface FavoritesState {
  favorites: IMovie[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload.imdbID);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
