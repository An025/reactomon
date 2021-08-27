import React from "react";
import Pokemons from "../Pokemons/Pokemons";
import Types from "../Pokemons/Types";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
            <li>
              <Link to="/types">Types</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/types">
            <Types />
          </Route>
          <Route path="/">
            <Pokemons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




