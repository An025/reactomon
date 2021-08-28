import React, {useState, useEffect} from 'react';
import Container from '../UI/Container';
import axios from 'axios';

function Pokemons() {
    const[pokemons, setPokemons] = useState([]);

    useEffect(()=>{
      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => setPokemons(response.data.results))
    }, [])
    

    return <Container title={"Pokemons"} pokemons={pokemons}/>   
  }

export default Pokemons;