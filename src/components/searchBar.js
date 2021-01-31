
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AutocompleteLang from './autocompleteLang.js';

const SearchBar = ({searchHandler,handleSubmit}) => {

  return (
            <div>
            {/* <AutocompleteLang/> */}
                <input
                  class="searchInputClass"
                  type="text"
                  placeholder="Enter a Movie, year or language.."
                  onChange={(e) => searchHandler(e.target.value)}
                  />
                  <button class="searchButton" onClick={handleSubmit}>
                     <SearchIcon />
                  </button>
        </div>
  );
}

export default SearchBar
