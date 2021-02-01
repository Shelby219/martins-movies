import React from "react";
import { Link } from "react-router-dom";
import {ReadMoreButton, BaseContainer} from '../components/styles.js';
import UnderNavHeader  from '../components/underNavheader.js';


function NotFound() {
  return (
    <BaseContainer>
     <UnderNavHeader location="notFoundPage" />
     <div style={{ textAlign: "center", margin: "100px", fontSize: "1.4em"}}>Oops page not found.....</div>
      <Link to={"/"} style={{ textDecoration: 'none', alignSelf: "center", }}>
       <ReadMoreButton>Go Home</ReadMoreButton>
     </Link>
    </BaseContainer>
  );
}

export default NotFound;
