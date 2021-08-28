import axios from 'axios';
import React, {useState, useEffect} from 'react';
import classes from './PokemonCard.module.css';
import Image from './../UI/Image';
import PokemonDetails from './PokemonDetails';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function PokemonCard(props){

    const [id, setId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    useEffect(()=>{
        console.log("pokemon axios")
        axios.get(props.url)
        .then(response => {
            // console.log(response.data.species)
            setId(response.data.id)
            setImageUrl(response.data.sprites.front_default);
        })
    },[props.url]);


    return (
        <Router>
        
            <div key={id} id={id} className={classes.card}>
                <Link to={`/pokemon/${id}`}>
                    <h2>{props.name}</h2> 
                    </Link>  
                <Image path={imageUrl} title={props.name}/>
            </div>
       
        <Switch>
          <Route path={`/pokemon/${id}`}>
            <PokemonDetails id={id} />
          </Route>
        </Switch>
 
     </Router>
    );
}

export default PokemonCard;