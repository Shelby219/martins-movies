import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import {HomePage, BaseContainer} from '../components/styles.js';
import SearchBar from '../components/searchBar.js';


import {searchMoviesByKeyword} from '../services/movieServices.js';

function Home({actions}) {
   const [searchInput, setSearchInput] = useState("")


   function getSearchInput (event){
      setSearchInput(event)
      //console.log(searchInput)
   }

   async function  searchMovies (){
      await searchMoviesByKeyword(searchInput)
       .then((res) => {
           console.log("Success", res.results)
           actions.getMoviesDisplay(res.results)
          })
          .catch((error) => {
            console.log("Error", error)
          })

    }


   useEffect(() => {


   }, []);


  return (
        <BaseContainer>
                <HomePage>
                  <h1> SEARCH FOR A MOVIE! </h1>
                  <div>
                  <SearchBar
                    searchHandler={getSearchInput}
                    handleSubmit={searchMovies}
                  />

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


