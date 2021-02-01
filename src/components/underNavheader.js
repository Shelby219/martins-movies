import React from "react";
import {useLocation} from "react-router-dom";
import {ListNav} from '../components/styles.js';


function UnderNavHeader({location}) {
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

   //if path
   switch(location) {
        case  "allMovies":
            // code block
                return (
                                    <ListNav>
                                        <h1 style={{textAlign: "center", filter: "drop-shadow(2px 4px 8px #585858)"}}> View All Movies </h1>
                                    </ListNav>

            );
            break;
        case "searchedMovies":
            return (
                                        <ListNav>
                                            <h1> Search Results for: {query.get("search")}  </h1>
                                        </ListNav>

                );

            break;
        default:
              return (
                                <ListNav>
                                    <h1> Error: 404 </h1>
                                </ListNav>

          );
        }
}

export default UnderNavHeader;


