import React from "react";

import genresArray from "../data/genres.json";

function MovieCard({movie}) {

   const {id, title, poster_path, vote_average, genre_ids, overview} = movie

   
  const filterGenres = (genresArray, genre_ids) => {
      const filteredArray = [];
      genresArray.map((obj) => {
        const filteredObj = {};
        for (let key in obj) {
          if (genre_ids.includes(key)) {
            filteredObj[key] = obj[key];
          };
        };
        filteredArray.push(filteredObj);
      })
      return filteredArray;
    }


  return (
    <div>
      <h4>{title}</h4>
       <>
      <img alt="movie poster" src={`https://image.tmdb.org/t/p/original${poster_path}`} width="10%" />
      </>
       <p>{vote_average} / 10</p>
       <p>Genre: {genre_ids}</p>
       <p>{overview}</p>

    </div>
  );
}

export default MovieCard;
