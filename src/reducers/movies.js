import { createAction, createReducer } from "@reduxjs/toolkit";



const getMovies = createAction("getMovies");
const addTooWatchedMovies = createAction("addTooWatchedMovies");
const deleteWatchedMovies = createAction("deleteWatchedMovies");

const initialState = { allMovieData: [], movieData: null, watchedMovies: [] };

const martinsMovies = createReducer(initialState, (builder) => {
  builder
    .addCase(getMovies, (state, action) => {
      state.movieData = action.payload;
      ///state.watchedMovies = []
      //console.log("movie s c")
    })
    .addCase(addTooWatchedMovies, (state, action) => {
      //console.log("check payload", action.payload)
      //console.log("check state", state)
       const newMovie = action.payload
       return {
                ...state,
                watchedMovies: [...state.watchedMovies,
                {
                     movieId: newMovie,
                     watched: true
                 }]
            }
     })
     .addCase(deleteWatchedMovies, (state, action) => {
       return {
                ...state,
                watchedMovies: state.watchedMovies.filter(movie => movie.movieId !== action.payload)
            }
     })

});



export default martinsMovies


