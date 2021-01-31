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
        console.log("All movies per page state changed")
        console.log(action.payload)
        })
    .addCase(getMovies, (state, action) => {
      state.movieData = action.payload;
      console.log("movie state changed")
      console.log(action.payload)
    })
    .addCase(addTooWatchedMovies, (state, action) => {
       // state.movieData = action.payload;
       console.log("movie marker changed")
        return {
                ...state,
                watchedMovies: [
                ...state.watchedMovies,
                {
                    movieId: action.payload.id,
                    watched: true
                }
               ]
            }
     })
     .addCase(deleteWatchedMovies, (state, action) => {
       console.log("movie marker removed")
       return state.watchedMovies.filter(movie => movie.movieId !== action.payload.id);
     })


});


export default martinsMovies


