import React, {useState, useEffect} from 'react';
import Container from '../UI/Container';
import axios from 'axios';
import PokemonCard from './PokemonCard';

function Pokemons() {
    const[pokemons, setPokemons] = useState([]);

    useEffect(()=>{
      console.log("Hello axios");
      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => setPokemons(response.data.results))
    }, [])
    

    return <Container title={"Pokemons"} pokemons={pokemons}>
       
  
    </Container>
   
  }

export default Pokemons;