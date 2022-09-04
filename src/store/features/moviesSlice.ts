import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI, MovieRequestParams, transformSearchMovie } from "../../services";
import { ISearchMovie, ISearchMovieListAPI } from "../../types";

interface MoviesState {
  isLoading: boolean;
  error: string | null;
  results: ISearchMovie[];
  searchWord?: string;
}

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  results: [],
};

export const getMovies = createAsyncThunk<
  ISearchMovieListAPI,
  MovieRequestParams,
  { rejectValue: string }
>("movies/getMovies", async ({ page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getAll({ page });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const getTrends = createAsyncThunk<
  ISearchMovieListAPI,
  MovieRequestParams,
  { rejectValue: string }
>("movies/getTrends", async ({ page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getTrends({ page });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const getSearchMovies = createAsyncThunk<
  ISearchMovieListAPI,
  MovieRequestParams,
  { rejectValue: string }
>("movies/getSearchMovies", async ({ s, page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getSearchMovies(s, { page });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    cleanStore: (state) => {
      state.results = []
    },
    addSearchWord: (state, { payload }) => {
      state.searchWord = payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const newMovies = transformSearchMovie(payload["Search"]);
      state.results.push(...newMovies);
    });
    builder.addCase(getMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
            state.error = payload;
        }
    });
    builder.addCase(getTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const newMovies = transformSearchMovie(payload["Search"]);
      state.results.push(...newMovies);
    });
    builder.addCase(getTrends.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
            state.error = payload;
        }
    });
    builder.addCase(getSearchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSearchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const newMovies = transformSearchMovie(payload["Search"]);
      state.results.push(...newMovies);
    });
    builder.addCase(getSearchMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
            state.error = payload;
        }
    });
  },
});

export const { cleanStore, addSearchWord } = moviesSlice.actions;
export default moviesSlice.reducer;
