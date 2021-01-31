import React, {useParams} from "react";
import {ListNav} from '../components/styles.js';



function UnderNavHeader() {
   console.log(window.location.href)
   console.log(window.location.pathname)

   if  (window.location.pathname ==="/all-movies"){
        return (
                                <ListNav>
                                    <h1> View All Movies </h1>
                                </ListNav>

          );

   } else {

          return (
                                <ListNav>
                                    <h1> Search Results for: "search query" </h1>
                                </ListNav>

          );
   }
}

export default UnderNavHeader;


