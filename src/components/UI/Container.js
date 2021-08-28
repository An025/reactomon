import React from 'react';
import classes from './Container.module.css'
import PokemonList from '../Pokemons/PokemonsList';
import TypesList from '../Pokemons/TypesList';
function Container(props){


    return <div className={classes.container} >
            <h1>{props.title}</h1>
            <div>
            {(props.title==="Pokemons")?<PokemonList pokemons={props.pokemons} />: <TypesList types={props.types}/> }
            </div>
    </div>
}

export default Container;