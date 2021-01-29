import React from "react";
import {ListNav} from '../components/styles.js';
import MovieCard  from '../components/movieCard.js';


function MovieListings() {
   let testData = [{
            "adult": false,
            "backdrop_path": "/7LZ0K4FsALrt7OeNIGOVLNuKQRU.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 348350,
            "media_type": "movie",
            "original_language": "en",
            "original_title": "Solo: A Star Wars Story",
            "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
            "popularity": 83.896,
            "poster_path": "/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg",
            "release_date": "2018-05-15",
            "title": "Solo: A Star Wars Story",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 5993
        },
        {
            "adult": false,
            "backdrop_path": "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
            "genre_ids": [
                28,
                12,
                878,
                14
            ],
            "id": 140607,
            "media_type": "movie",
            "original_language": "en",
            "original_title": "Star Wars: The Force Awakens",
            "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
            "popularity": 86.891,
            "poster_path": "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
            "release_date": "2015-12-15",
            "title": "Star Wars: The Force Awakens",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 15414
        },
        {
            "backdrop_path": "/p3McpsDNTNmpbkNBKdNxOFZJeKX.jpg",
            "first_air_date": "2017-09-24",
            "genre_ids": [
                10765,
                10759
            ],
            "id": 67198,
            "media_type": "tv",
            "name": "Star Trek: Discovery",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Star Trek: Discovery",
            "overview": "Follow the voyages of Starfleet on their missions to discover new worlds and new life forms, and one Starfleet officer who must learn that to truly understand all things alien, you must first understand yourself.",
            "popularity": 76.726,
            "poster_path": "/98RYSYsRNKWgrAAFBn0WfploUG7.jpg",
            "vote_average": 7.1,
            "vote_count": 931
        }]

  

  return (
    <div>
      <ListNav>
        <h2> Search Results for: </h2>
      </ListNav>

       <div>
           {testData.map((movie)=>
            <MovieCard movie={movie}/>
           )
           }
       </div>


    </div>
  );
}

export default MovieListings;


