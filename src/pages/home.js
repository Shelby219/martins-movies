import React from "react";

import {HomePage, BaseContainer} from '../components/styles.js';
import SearchIcon from '@material-ui/icons/Search';

function Home() {
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

export default Home;
