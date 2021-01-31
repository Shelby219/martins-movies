import { createAction, createReducer } from "@reduxjs/toolkit";

const getMovies = createAction("getMovies");
const watchedMovies = createAction("watchedMovies");


const initialState = { movieData: [], watchedMovies: [] };

const martinsMovies = createReducer(initialState, (builder) => {
  builder
    .addCase(getMovies, (state, action) => {
      state.movieData = action.payload;
    })
    // .addCase(watchedMovies, (state, action) => {
    //   //state.movieData = action.payload;
    //   //...state.movieData,
    //   state.movieData.map(movie => {
    //       // If this isn't the movie item we're looking for, leave it alone
    //       if (movie.id !== action.payload) {
    //         return movie
    //       }
    //       // We've found the movie that has to change. Return a copy:
    //       return {
    //         ...movie,
    //         // Flip the completed flag
    //         watched: !movie.watched
    //       }
    //     })
    // })

    .addCase(watchedMovies, (state, action) => {
        state.movieData = action.payload;
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

});


export default martinsMovies


// function nextMovieId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
//   return maxId + 1
// }


// export default function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'todos/todoAdded': {
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: nextTodoId(state.todos),
//             movie: action.payload,
//             watched: false
//           }
//         ]
//       }
//     }
//     case 'todos/todoToggled': {
//       return {
//         // Again copy the entire state object
//         ...state,
//         // This time, we need to make a copy of the old todos array
//         todos: state.todos.map(todo => {
//           // If this isn't the todo item we're looking for, leave it alone
//           if (todo.id !== action.payload) {
//             return todo
//           }

//           // We've found the todo that has to change. Return a copy:
//           return {
//             ...todo,
//             // Flip the completed flag
//             watched: !todo.watched
//           }
//         })
//       }
//     }
//     default:
//       return state
//   }
// }
