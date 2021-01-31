import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import {HomePage, BaseContainer} from '../components/styles.js';
import SearchBar from '../components/searchBar.js';
import LanguageList from '../components/languageList.js';

//import {searchMoviesByKeyword} from '../services/movieServices.js';

function Home() {
   const [input, setInput] = useState('');
   const [searchInput, setSearchInput] = useState("")


   function getSearchInput (e){
      setSearchInput(e)
      //console.log(searchInput)
   }

   function searchMovies (){
     console.log(searchInput)
    //  searchMoviesByKeyword(searchInput)
      //  .then((res) => {
      //      console.log("Success", res)
      //     })
      //     .catch((error) => {
      //       console.log("Error", error.response)
      //     })

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


