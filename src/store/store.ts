import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "./features/moviesSlice"
import movieReducer from "./features/movieSlice"
import userReducer from "./features/userSlice"

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
    users: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
