import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  watchedMovieData: [],
  selectedMovie: [],
  isLoading: null,
  isShowing: false,
  query: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movieData = action.payload;
    },
    addQuery: (state, action) => {
      state.query = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    isMovieSearchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addIsShowing: (state, action) => {
      state.isShowing = action.payload;
    },
  },
});

export const {
  addMovies,
  addQuery,
  addSelectedMovie,
  isMovieSearchLoading,
  addIsShowing,
} = movieSlice.actions;

export default movieSlice.reducer;
