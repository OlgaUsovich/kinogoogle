import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI, transformMovie } from "services";
import {IMovie, IMovieAPI} from "types";

interface MovieState {
  isLoading: boolean;
  error: string | null;
  result: IMovie;
}

const initialState: MovieState = {
  isLoading: false,
  error: null,
  result: {
    title: "",
    year: "",
    released: "",
    runtime: "",
    genre: [],
    director: "",
    writer: "",
    actors: "",
    plot: "",
    country: "",
    poster: "",
    imdbRating: "",
    imdbID: "",
    type: "",
    boxOffice: "",
    production: "",
  },
};

export const getMovie = createAsyncThunk<
  IMovieAPI,
  string,
  { rejectValue: string }
>("movies/getMovie", async (id, { rejectWithValue }) => {
  try {
    return await movieAPI.getById(id);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovie.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getMovie.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result = transformMovie(payload);
    });
    builder.addCase(getMovie.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default movieSlice.reducer;
