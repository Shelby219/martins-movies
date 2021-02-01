import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {HomePage, BaseContainer} from '../components/styles.js';
import SearchBar from '../components/searchBar.js';


import {searchMoviesByKeyword} from '../services/movieServices.js';

function Home({actions,listOfMovies}) {
   let history = useHistory();
   console.log("check state",listOfMovies)
   //const [searchInput, setSearchInput] = useState("")
   const [searchInput, setSearchInput] = useState({
     keyword: "",
     year: "",
     language: ""
   })

   function getSearchInput (event){
      //setSearchInput(event)
      setSearchInput({
            ...searchInput,
            keyword: event
        })
    }

    function getYearInput (event){
        setSearchInput({
            ...searchInput,
            year: event
        })
      }
    function getLangInput (event){
        setSearchInput({
            ...searchInput,
            language: event
        })
      }

   async function  searchMovies (){
      await searchMoviesByKeyword(searchInput.keyword, 1)
       .then((res) => {
           console.log("Check ", searchInput)
           console.log("Success", res.results)
           actions.getMoviesDisplay(res.results)
           history.push(`/searched-movies?search=${searchInput.keyword}`);
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
                    searchKeywordHandler={getSearchInput}
                    searchYearHandler={getYearInput}
                    searchLangHandler={getYearInput}
                    handleSubmit={searchMovies}
                  />

                  </div>
                </HomePage>
          </BaseContainer>
  );
}

const mapStateToProps = (state) => ({
  listOfMovies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getMoviesDisplay: (movies) => {
      dispatch({ type: "getMovies", payload: movies });
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


