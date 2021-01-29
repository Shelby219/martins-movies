import React, {useState, useEffect} from "react";

import genresArray from "../data/genres.json";

function MovieCard({movie}) {
   //const [genreState, setGenreState] = useState("")
   const {id, title, poster_path, vote_average, genre_ids, overview} = movie


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
    <div>
      <h4>{title}</h4>
       <>
      <img alt="movie poster" src={`https://image.tmdb.org/t/p/original${poster_path}`} width="10%" />
      </>
       <p>{vote_average} / 10</p>
       <p>Genre: {filterByReference(genresArray, genre_ids)}</p>
       <p>{overview}</p>

    </div>
  );
}

export default MovieCard;
