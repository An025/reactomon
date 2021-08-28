import React, {useState, useEffect} from 'react';
import Container from '../UI/Container';
import axios from 'axios';

function Types() {
  const[types, setTypes] = useState([]);

    useEffect(()=>{
      console.log("Hello axios");
      axios.get("https://pokeapi.co/api/v2/type")
      .then(response => setTypes(response.data.results))
    }, [])
    
    return <Container title={"Types"} types={types}/>
  }

export default Types;