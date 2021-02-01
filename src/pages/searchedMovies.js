import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {useLocation} from "react-router-dom";

import {MovieContainer, BaseContainer} from '../components/styles.js';

import MovieCard  from '../components/movieCard.js';
import UnderNavHeader  from '../components/underNavheader.js';
import Loading  from '../components/loading.js';

//Material UI
import { makeStyles } from "@material-ui/styles";
import { Pagination } from '@material-ui/lab';

//Services
import {searchMoviesByKeyword} from '../services/movieServices.js';

  const useStyles = makeStyles((theme) => ({
    pagination: {
        paddingTop: "25px",
        alignSelf: "center",
        "@media (max-width: 330px)": {
            maxWidth: "300px",
         },
    },
    paginationItem: {
        fontSize: "0.2em",
    },
    }));

function MovieListings({listOfMovies, actions}) {

    const classes = useStyles();
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

    const [isLoaded, setisLoaded] = useState(true)
    const [pageCount, setPageCount] = useState(500)
    const [currentPage, setCurrentPage] = useState(1);

    //Test data for displaying components
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
            "overview": "Through a series of daring eses of daring escapades  of daring escapades deep within es of daring escapades deep within es of daring escapade of daring escapades deep within es of daring es of daring escapades deep within es of daring es  of daring escapades deep within es of daring escapades deep within es of daring escapadecapades deep within es of daring escapadecapades deep within es of daring escapadedeep within es of daring escapades deep within es of daring escapades deep within capades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
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
        },
        {
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

    //Function which calls the Movie API keyword search if current page changes
    const handleAxiosData = async () => {
        setisLoaded(false)
        await searchMoviesByKeyword(query.get("search"), currentPage)
            .then((res) => {
                actions.getMoviesDisplay(res.results)
                setPageCount(res.total_pages)
                //console.log("Success", res.results)
                //console.log("Page", res.page)
                setisLoaded(true)
                })
                .catch((error) => {
                    console.log("Error", error.response)
                    alert("oops there has been an error")
                })
    };

    const handlePageChange = (event, selectedObject) => {
        setCurrentPage(selectedObject);
    };

    useEffect(() => {
        handleAxiosData()
    }, [currentPage]);

    return (
            <BaseContainer>
             <UnderNavHeader location="searchedMovies"/>
             {isLoaded ? (
               <>
                <div className={classes.pagination}>
                     <Pagination
                        className={classes.paginationItem}
                        count={pageCount}
                        page={currentPage}
                        onChange={handlePageChange}
                        boundaryCount={1}

                    />
                </div>
                        <MovieContainer>
                            {listOfMovies === undefined || listOfMovies.length !== 0  ? (
                            <>
                                {listOfMovies && listOfMovies.map((movie)=>
                                    <MovieCard key={movie.id} movie={movie}/>
                                    )}
                            </>
                            ):(
                        <div style={{textAlign: "center", margin: "100px"}}>No Results Returned</div>
                        )}
                        </MovieContainer>
                </>
                ) : (
				<div><Loading/></div>
			    )}

            </BaseContainer>
    );
}

const mapStateToProps = (state) => ({
  listOfMovies: state.movies.movieData,
  listOfWatchedMovies: state.movies.watchedMovies,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
   getMoviesDisplay: (movies) => {
      dispatch({ type: "getMovies", payload: movies });
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListings);

