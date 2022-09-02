import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI, transformSearchMovie } from "../../services";
import { IMovieAPI, ISearchMovie, ISearchMovieListAPI } from "../../types";

interface MoviesState {
  isLoading: boolean;
  error: string | null;
  results: ISearchMovie[];
}

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  results: [],
};

export const getMovies = createAsyncThunk<
  ISearchMovieListAPI,
  undefined,
  { rejectValue: string }
>("movies/getMovies", async (_, { rejectWithValue }) => {
  try {
    return await movieAPI.getAll();
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

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

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = transformSearchMovie(payload["Search"]);
    });
    builder.addCase(getMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
            state.error = payload;
        }
    });
  },
});

export default moviesSlice.reducer;
