import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import {MovieContainer, BaseContainer} from '../components/styles.js';
import MovieCard  from '../components/movieCard.js';
import UnderNavHeader  from '../components/underNavheader.js';
import Loading  from '../components/loading.js';

//Material UI
import { makeStyles } from "@material-ui/styles";
import { Pagination } from '@material-ui/lab';
import {Typography} from "@material-ui/core";


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

function AllMovieListings({actions, allMovieDataPerPage}) {
   const classes = useStyles();
   //const { pagination, paginationItem} = useStyles();
   const [isLoaded, setisLoaded] = useState(false)
   const [pageCount, setPageCount] = useState(500)
   const [currentPage, setCurrentPage] = useState(1);
   const [movieData, setMovieData] = useState([]);

   //function here that checks Redux for watched movies


   //Function which calls the Movie API returning all Movies, and paginating the data.
   const handleAxiosData = async () => {
    setisLoaded(false)
    await getAllMovieData(currentPage)
       .then((res) => {
           //actions.getMoviesDisplay(res.results)
	       setMovieData(res.results);
           setPageCount(res.total_pages)
           //console.log("Success", res.results)
           console.log("Page", res.page)
           setisLoaded(true)
          })
          .catch((error) => {
            console.log("Error", error.response)
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
           <UnderNavHeader/>
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
                            {movieData.map((movie)=>
                                <MovieCard key={movie.id} movie={movie}/>
                            )
                            }
                 </MovieContainer>
                </>
                ) : (
				<div><Loading/></div>
			    )}
            </BaseContainer>
  );
}


const mapStateToProps = (state) => ({
  allMovieDataPerPage: state.movies.allMovieData,
});


const mapDispatchToProps = (dispatch) => ({
  actions: {
   getAllMoviesPerPage: (movies) => {
      dispatch({ type: "getAllMoviesPerPage", payload: movies });
    },

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllMovieListings);
