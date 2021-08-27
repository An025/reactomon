import React from 'react';
import PokemonCard from '../Pokemons/PokemonCard';
import classes from './Container.module.css'
function Container(props){
    return <div className={classes.container} >
        <h1>{props.title}</h1>
        <div>
            {props.pokemons.map((pokemon)=>(
                <PokemonCard name={pokemon.name}/>
        ))}
        </div>
        
      
        
    </div>
}

export default Container;