
import {Body} from './components/styles.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/home.js";
import MovieListings from "./pages/searchedMovies.js";
import AllMovies from "./pages/allMovies.js";
import NotFound from "./pages/404.js";

//components
import Nav from "./components/nav.js";
import CssBaseline from "@material-ui/core/CssBaseline";


function App({actions}) {

  return (
     <Body>
          <CssBaseline />
          <BrowserRouter>
          <Nav />
            <Switch>
            <Route  exact  path="/"  component={Home} />
            <Route  exact  path="/searched-movies"  component={MovieListings} />
            <Route  exact  path="/all-movies"  component={AllMovies} />
            <Route component={NotFound} />
            </Switch>
          </BrowserRouter>

      </Body>
  );
}


export default App;
