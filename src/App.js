
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home.js";
import MovieListings from "./pages/movieListings.js";
import NotFound from "./pages/404.js";

import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
  return (
    <div >
      <CssBaseline />
       <BrowserRouter>
        <Switch>
         <Route  exact  path="/"  component={Home} />
         <Route  exact  path="/listings"  component={MovieListings} />
         <Route component={NotFound} />
        </Switch>
       </BrowserRouter>
      </div>
  );
}

export default App;
