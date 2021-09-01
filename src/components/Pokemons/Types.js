import React, {useState, useEffect} from 'react';
import TypesList from './TypesList';
import axios from 'axios';
import classes from './Container.module.css'

function Types() {
  const[types, setTypes] = useState([]);

    useEffect(()=>{
      console.log("Hello axios");
      axios.get("https://pokeapi.co/api/v2/type")
      .then(response => setTypes(response.data.results))
    }, [])
    
    // return <Container title={"Types"} types={types}/>

    return (<div className={classes.container} >
          <h1>Types</h1>
          <div>
              <TypesList types={types}/>
          </div>
      </div>)
  }

export default Types;