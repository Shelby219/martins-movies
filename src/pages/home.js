import React,{useEffect} from "react";
import { connect } from "react-redux";
import {HomePage, BaseContainer} from '../components/styles.js';
import SearchIcon from '@material-ui/icons/Search';

import {searchMoviesByKeyword} from '../services/movieServices.js';

function Home() {


  useEffect(() => {
   searchMoviesByKeyword("and")
   .then((res) => {

       console.log("Success", res)
      })
      .catch((error) => {
        console.log("Error", error.response)
      })

    }, []);


  return (

        <BaseContainer>
                <HomePage>
                <h1> SEARCH FOR A MOVIE! </h1>
                <div>
                <input  class="searchInput"
                type="text"
                placeholder="Enter a Movie, year or language.."
                />
                <button class="searchButton"><SearchIcon  /></button>

                </div>
                </HomePage>
          </BaseContainer>



  );
}

const mapStateToProps = (state) => ({
  listOfMovies: state.martinsMovies,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getMoviesDisplay: (movies) => {
      dispatch({ type: "getMovies", payload: movies });
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


