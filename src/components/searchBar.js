
import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AutocompleteLang  from '../components/autocompleteLang.js';


const SearchBar = ({
  searchKeywordHandler,
  handleSubmit}) => {

  return (
            <div>
                <input
                  class="searchInputClass"
                  type="text"
                  placeholder="Enter a Movie, year or language.."
                  onChange={(e) => searchKeywordHandler(e.target.value)}
                />
                  <button class="searchButton" onClick={handleSubmit}>
                     <SearchIcon />
                  </button>
        </div>
  );
}

export default SearchBar
