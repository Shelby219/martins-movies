import { createAction, createReducer } from "@reduxjs/toolkit";

const getMovies = createAction("getMovies");
const addTooWatchedMovies = createAction("addTooWatchedMovies");
const deleteWatchedMovies = createAction("deleteWatchedMovies");

const initialState = { movieData: [], watchedMovies: [] };

const martinsMovies = createReducer(initialState, (builder) => {
  builder
    .addCase(getMovies, (state, action) => {
      state.movieData = action.payload;
    })
    .addCase(addTooWatchedMovies, (state, action) => {
       // state.movieData = action.payload;
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
       return state.watchedMovies.filter(movie => movie.id !== action.payload.id);
     })

});


export default martinsMovies


