import React,{useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Styles
import {MovieCardStyle, ReadMoreButton, Watched} from '../components/styles.js';

import {getMovieIMDBID} from '../services/movieServices.js';

import genresArray from "../data/genres.json";

function MovieCard({movie, actions, listOfWatchedMovies}) {

   //Destructuring the movie
   const {id, title, name, poster_path, vote_average, genre_ids, overview, watched} = movie

   //Filtering for checkbox
   const [checked, setChecked] = useState(watched === true ? watched  : false)

  //Filtering the genres by ID from DB to return from JSON
   const filterByReference = (arr1, arr2) => {
        let res = [];
        res = arr1.filter(el => {
            return arr2.find(element => {
              return element === el.id;
            });
        });
        //return res;
        const displayGens = []
        res.map((genre)=>{
            return displayGens.push(genre.name)
        })
        return displayGens.join(',  ');

    }

   //Handling the checkbox being checked
    function handleChecker (event){
      if (checked === false){
          console.log("watched")
          setChecked(true)
          actions.markWatched(event.target.name)

      } else if (checked === true) {
          console.log("not watched")
          setChecked(false)
          actions.unMarkWatched(event.target.name)
      } else {
         console.log("error")
      }
    }

  async function getIMDBIDHandler (){
      await getMovieIMDBID(id)
       .then(async(res) => {
         console.log(res.imdb_id)
         window.open(`https://www.imdb.com/title/${res.imdb_id}/`);
        })
        .catch((error) => {
            console.log("Error", error)
        })
    }

  return (
      <MovieCardStyle key={id}>
        <Link to={"/#"} style={{ textDecoration: 'none' }} >
                       {poster_path ?
                       <img alt="movie poster" src={`https://image.tmdb.org/t/p/original${poster_path}`} width="100%" />
                       :
                       <img alt="movie poster" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAMFBMVEXd3d2xsbHFxcWzs7PMzMza2tq+vr7W1ta2travr6/R0dG7u7vExMTZ2dnT09POzs7+TBqqAAAEmUlEQVR4nO2cDZeqIBCGF/mQBOT//9uLmQqold3QofM+5+yeLdv2aXaYAbT+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwD0V5t8BG9bq5W+IiG6asVPqE1jHVXS3yA4IzZqyXewsnoRqsYY9pdJvMushVKROJeB28mrhN6B9n6xnDul3vcEG7GjNz/pcuRfaNCMjMVZcUYbqb767Re0AprBmvGo6Rw9q7NONES7kJ+jJFNw92bx52GYs+UIiT1QzAJrWymu7Xf//XLaGfpwTCKbGvmV0PRu7lF3nGPEcurITgwnY7DHQku4U6Sngoi0l7CLXs7vR7OLcFh6Uykzcdwy16oKem5aWgkSeiKsYiPR6Uajy+hNpbIssF1oVRHE1Op4nB3w/Ep1FyrpifR4YdWrtktHmVdPCpVL6werW8hPzyN0Rj+//dWHjcRaaM04cbMjYZKfshubuUqMkrCPRfDMBSJhFooPReIaOK0dPLI2naORFYPHSTSM1E16U3qfOOKSH7ciTt5MicVabg1kVL9oN3t5HER1IpIUs/4yI7bWS608jnnuRHEpANxEk9FcGjl+jbVjzAUr1XcootTWN1LhYtauVaeVFbPJJ08hNtFs6ahlRMM9UCfTJxCftipKoZZkydU9TJsMiqbpZWHUk2kv2yRFEE+dU1ONz8eNGyNtp5KK9+jNbl0KNWU8+NB1slv2tJYCrwgDTe3FPdBthDzqAytvKkgP0acmpPaEll1vcW4nOHES/UKae+hbijOmnKkc7Nlp/mwwK0h1G2j1JzKnRLEu+KEH3camjHEsg7pZbOP053mbdJPbZHoCZk95pWkGm+3IiNb2UifHc9PacdP4MuNb3/LvM0txaTioVCmx/MTIr2ODxb7L85rm+kv5Bs7TKXizmYbVjqNqhTJ9L3YiePHbHs5b9er1IuZV+Liibgq5e2sDqgnW2n8fyJuSnn/yd77LqmCecS5Sgefy/c2n0S8nPcG+ZLndcR3xU/1/mLEz/VeD87XEU+Oz+Ine39QVdI6Pomf7b2u49kVDutU2RQ/3fu1eB5xviV+vne6R7+VKnnE+UaOX+B9XHyjAV3hHcQzsbyqNNlJwXU5LOLdds/pxWqS5ZPjPn9hWqTPYIt4N/oOn75xntwafsi8efSg8YGrByzHh29FvC0rThnv9bnfKrw3zlnDG94ras3vWr1PyJMib3WoNb9r9a41v2v1rjVPfs6bq4NsXVRYzns3v7WTx9idEZ8bb31ww33f+9y+c9R7fwVycrz79hj5yr+s925+c32Q3cKEvhPxc/Ub3sjvH/CuNU9q9a41T2r1/sF9CD5c98jvX9MP6a3k7n3vk9c7tjmEJbPeOfZEJ6939r2/tt6hvU4js97Jrw57xepa96Le+/WbH4WI99dA34lAvM/1rjXetXrXmifwhvc7iPLeRa5HPsG7yCe1yd1t629R6IPausIBL3a5fdlM4bbUGzNkp/bPFfyndNlPNHD+2NL9fQi/Yx0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDf4R8EwD9rYeMzawAAAABJRU5ErkJggg==" width="100%" />
                       }

                      <h2>{title ? title : name}</h2>
                      <div>
                        <p><img alt="star rating" src="https://img.icons8.com/fluent/48/000000/filled-star.png" width="15px" style={{marginRight: "5px" }}/>
                        {vote_average} / 10</p>
                        <p>{filterByReference(genresArray, genre_ids)}</p>
                      </div>
                      <div class="overview">{overview}</div>
     </Link>

     <div class="buttonGroup" >

              <ReadMoreButton onClick={getIMDBIDHandler}>Read More</ReadMoreButton>

            <Watched>
            <input
                  name={id}
                  type="checkbox"
                  checked={checked}
                  onChange={handleChecker}
                  />
            <span> {checked ? <> Watched </> :  <> Unwatched </>} </span>
          </Watched>
     </div>
   </MovieCardStyle>

  );
}


const mapStateToProps = (state) => ({
  listOfMovies: state.movies.movieData,
  listOfWatchedMovies: state.movies.watchedMovies,
});


const mapDispatchToProps = (dispatch) => ({
  actions: {
    markWatched: (movieId) => {
      dispatch({ type: "addTooWatchedMovies", payload: movieId });
    },
    unMarkWatched: (movieId) => {
      dispatch({ type: "deleteWatchedMovies", payload: movieId });
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
