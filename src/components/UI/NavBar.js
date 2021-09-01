import React from "react";
import Pokemons from "../Pokemons/Pokemons";
import Types from "../Pokemons/Types";
import Image from './Image';
import logo from './../../images/header.png';
import classes from './NavBar.module.css';
import Button from './Button';
import PokemonDetails from "../Pokemons/PokemonDetails";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <div>
        <nav className={classes.navbar}>
          <Image path={logo} title="Pokemon"/>
          <ul>
            <li>
              <Link to="/pokemons">
                <Button title={"Pokemons"}/>
                </Link>
            </li>
            <li>
              <Link to="/types">
                <Button title={"Types"}/>
                </Link>
            </li>
          </ul>
        </nav>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
       
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/pokemon/:id"  >
              
              <PokemonDetails />
    
          <Route/>
            
          </Route>
          <Route path="/types">
            <Types />
          </Route>
          <Route path="/">
            <Pokemons />
          </Route>
        </Switch>
      
    </Router>
  );
}




