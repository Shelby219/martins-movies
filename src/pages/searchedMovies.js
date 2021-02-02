import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {useLocation, useHistory} from "react-router-dom";

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

function MovieListings({listOfMovies, actions, listOfWatchedMovies}) {
    //const [movieDisplay, setMovieDisplay] = useState(listOfMovies)
     let history = useHistory();
     const classes = useStyles();
     function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

    const [isLoaded, setisLoaded] = useState(true)
    const [pageCount, setPageCount] = useState(500)
    const [currentPage, setCurrentPage] = useState(1);
    const [errors, setErrors] = useState(null);

    //Function which calls the Movie API keyword search if current page changes
    const handleAxiosData = async () => {
        setisLoaded(false)
        await searchMoviesByKeyword(query.get("search"), currentPage)
              .then(async(res) => {
                    setPageCount(res.total_pages)
                    if (listOfWatchedMovies.length === 0 || listOfWatchedMovies === undefined){
                    console.log("hit here")
                    return res.results
                    } else {
                    const copy = res.results
                    //console.log("hit copy",copy)
                    let resss = await  copy.map(x =>
                    Object.assign(x, listOfWatchedMovies.find(y => y.movieId == x.id)
                    ));
                    console.log("hit resss",resss)
                    return resss
                    }
                    })
            .then((result) => {
                    actions.getMoviesDisplay(result)
                    setisLoaded(true)
                    //history.push(`/searched-movies?search=${searchInput.keyword}`);
                    })
                .catch((error) => {
                    console.log("Error", error.response)
                    console.log("Error", error.response)
                        if (error.response && error.response.status === 401){
                        setErrors(error.response.data.status_message)
                        } else {
                        setErrors(error.response.data.status_message)}
                })
    };

   //Handling the page change and changing state
    const handlePageChange = (event, selectedObject) => {
        setCurrentPage(selectedObject);
    };

    //Hook called when current page changes
    useEffect( () => {
        handleAxiosData()
        //checkWatched()
    }, [currentPage]);



    return (
            <BaseContainer>
             <UnderNavHeader location="searchedMovies"/>
              {errors && <div style={{ textAlign: 'center', margin: '10px' }} >{errors}</div>}
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
                                {listOfMovies && listOfMovies.map((movie, index) =>

                                    <MovieCard key={movie.id} movie={movie} />

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

