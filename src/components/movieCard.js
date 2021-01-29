import React, {useState, useEffect} from "react";
import {MovieCardStyle, ReadMoreButton} from '../components/styles.js';


import genresArray from "../data/genres.json";

function MovieCard({movie}) {
   //const [genreState, setGenreState] = useState("")
   const {id, title, name, poster_path, vote_average, genre_ids, overview} = movie


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
            displayGens.push(genre.name)
        })
        return displayGens.join(',  ');
        //setGenreState(displayGens)
    }


   //console.log(filterByReference(genresArray, genre_ids));

  return (

      <MovieCardStyle>


        <img alt="movie poster" src={`https://image.tmdb.org/t/p/original${poster_path}`} width="100%" />

        <h2>{title ? title : name}</h2>
        <div>
          <p><img src="https://img.icons8.com/fluent/48/000000/filled-star.png" width="15px" style={{marginRight: "5px" }}/>
          {vote_average} / 10</p>
          <p>{filterByReference(genresArray, genre_ids)}</p>
        </div>
         <div class="overview">{overview}</div>
         <ReadMoreButton>Read More</ReadMoreButton>

      </MovieCardStyle>

  );
}

export default MovieCard;
