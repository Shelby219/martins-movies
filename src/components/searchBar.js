
import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = ({
  searchKeywordHandler,
  searchYearHandler,
  searchLangHandler,
  handleSubmit}) => {

  const [checked, setChecked] = useState({
     keyword: false,
     year: false,
     language: false
   })
// searchYearHandler(e.target.value)
//searchLangHandler(e.target.value

  // function handleChecker (event){
  //   const name = event.target.name
  //   if (checked[name] === true){
  //          setChecked({
  //                 ...checked,
  //                 [name]: false
  //             })
  //         console.log("unmarked")
  //     } else {
  //          setChecked({
  //                 ...checked,
  //                 [name]: true
  //             })
  //         console.log("marked")
  //     }
  //   }

  //  if () {

  //  } else if () {

  //  } else {

  //  }

  return (
            <div>
             {/* <div>
                <label> By Keyword</label>
                  <input
                      name="keyword"
                      type="checkbox"
                      checked={checked.keyword}
                      onChange={handleChecker}
                      />
                <label> By Year</label>
                <input
                      name="year"
                      type="checkbox"
                      checked={checked.year}
                      onChange={handleChecker}
                      />
              <label> By Language</label>
                  <input
                      name="language"
                      type="checkbox"
                      checked={checked.language}
                      onChange={handleChecker}
                      />
              </div> */}

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
