import React, {useState, useEffect} from 'react';
// import Container from '../UI/Container';
import PokemonList from './PokemonsList';
import axios from 'axios';
import classes from './Container.module.css'

function Pokemons() {
    const[pokemons, setPokemons] = useState([]);

    useEffect(()=>{
      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => setPokemons(response.data.results))
    }, [])
    

    // return <Container title={"Pokemons"} pokemons={pokemons}/>   
    return (<div className={classes.container} >
              <h1>Pokemons</h1>
            <div>
                <PokemonList pokemons={pokemons}/>
            </div>
    </div>)
    
  }

export default Pokemons;