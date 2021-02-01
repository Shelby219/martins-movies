import React from "react";
import {useLocation} from "react-router-dom";
import {ListNav} from '../components/styles.js';



function UnderNavHeader() {
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

   //if path 
   if  (window.location.pathname ==="/all-movies"){
        return (
                                <ListNav>
                                    <h1 style={{textAlign: "center", filter: "drop-shadow(2px 4px 8px #585858)"}}> View All Movies </h1>
                                </ListNav>

          );

   } else {
          return (
                                <ListNav>
                                    <h1> Search Results for: {query.get("search")}  </h1>
                                </ListNav>

          );
   }
}

export default UnderNavHeader;


