
import {Body} from './components/styles.js';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//pages
import Home from "./pages/home.js";
import MovieListings from "./pages/movieListings.js";
import NotFound from "./pages/404.js";

//components
import Nav from "./components/nav.js";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
  return (
     <Body >
      <CssBaseline />
       <BrowserRouter>
       <Nav />
        <Switch>
         <Route  exact  path="/"  component={Home} />
         <Route  exact  path="/listings"  component={MovieListings} />
         <Route component={NotFound} />
        </Switch>
       </BrowserRouter>
      </Body>
  );
}

export default App;
