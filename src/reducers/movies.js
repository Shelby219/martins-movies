import { createAction, createReducer } from "@reduxjs/toolkit";


const getAllMoviesPerPage = createAction("getAllMoviesPerPage");
const getMovies = createAction("getMovies");
const addTooWatchedMovies = createAction("addTooWatchedMovies");
const deleteWatchedMovies = createAction("deleteWatchedMovies");

const initialState = { allMovieData: [], movieData: [], watchedMovies: [] };

const martinsMovies = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllMoviesPerPage, (state, action) => {
        state.allMovieData = action.payload;
        })
    .addCase(getMovies, (state, action) => {
      state.movieData = action.payload;
      ///state.watchedMovies = []
      console.log("movie state changed")
      //console.log(action.payload)
    })
    .addCase(addTooWatchedMovies, (state, action) => {
      console.log("check payload", action.payload)
      console.log("check state", state)
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
       const newMovie = action.payload
       console.log("movie marker removed")
       return state.watchedMovies.filter(movie => movie.movieId !== newMovie);

     })

});


export default martinsMovies


