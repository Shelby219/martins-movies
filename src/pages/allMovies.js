import React,{useEffect, useState} from "react";
import { connect } from "react-redux";

import {MovieContainer, BaseContainer} from '../components/styles.js';
import MovieCard  from '../components/movieCard.js';
import UnderNavHeader  from '../components/underNavheader.js';
import Loading  from '../components/loading.js';

//Material UI
import { makeStyles } from "@material-ui/styles";
import { Pagination } from '@material-ui/lab';



//Axios Services
import {getAllMovieData} from '../services/movieServices.js';

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

function AllMovieListings({listOfWatchedMovies}) {
   const classes = useStyles();
   //const { pagination, paginationItem} = useStyles();
   const [isLoaded, setisLoaded] = useState(false)
   const [pageCount, setPageCount] = useState(500)
   const [currentPage, setCurrentPage] = useState(1);
   const [movieData, setMovieData] = useState([]);
   const [errors, setErrors] = useState(null);
   //function here that checks Redux for watched movies


   //Function which calls the Movie API returning all Movies, and paginating the data.
   const handleAxiosData = async () => {
    setisLoaded(false)
    await getAllMovieData(currentPage)
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
                  setMovieData(result);
                  setisLoaded(true)
          })
          .catch((error) => {
            console.log("Error", error.response)
            if (error.response && error.response.status === 401){
            setErrors(error.response.data.status_message)
            } else {
            setErrors(error.response.data.status_message)}
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
           <UnderNavHeader location="allMovies"/>
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
                            {movieData && movieData.map((movie)=>
                                <MovieCard key={movie.id} movie={movie}/>
                            )
                            }
                 </MovieContainer>
                 <div className={classes.pagination}>
                     <Pagination
                        className={classes.paginationItem}
                        count={pageCount}
                        page={currentPage}
                        onChange={handlePageChange}
                        boundaryCount={1}

                    />
                </div>
                </>
                ) : (
				<div><Loading/></div>
			    )}
            </BaseContainer>
  );
}


const mapStateToProps = (state) => ({
  listOfWatchedMovies: state.movies.watchedMovies,

});



export default connect(mapStateToProps)(AllMovieListings);

