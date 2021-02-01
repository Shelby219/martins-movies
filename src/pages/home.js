import React,{useState} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {HomePage, BaseContainer} from '../components/styles.js';
import SearchBar from '../components/searchBar.js';


import {searchMoviesByKeyword} from '../services/movieServices.js';

function Home({actions,listOfMovies, listOfWatchedMovies}) {
   let history = useHistory();

   //const [searchInput, setSearchInput] = useState("")
   const [searchInput, setSearchInput] = useState({
     keyword: "",
     year: "",
     language: ""
   })
  //gathering the search input
   function getSearchInput (event){
      //setSearchInput(event)
      setSearchInput({
            ...searchInput,
            keyword: event
        })
    }

 //Calling search movie function which calls API
   async function  searchMovies (){
     let search = searchInput.keyword
      await searchMoviesByKeyword(search, "1")
       .then(async(res) => {
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
          history.push(`/searched-movies?search=${searchInput.keyword}`);
        })
          .catch((error) => {
            console.log("Error", error)
        })
    }


  return (
        <BaseContainer>
                <HomePage>
                  <h1> SEARCH FOR A MOVIE! </h1>
                  <div>
                  <SearchBar
                    searchKeywordHandler={getSearchInput}
                    handleSubmit={searchMovies}
                  />
                  </div>
                </HomePage>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);


