import React from 'react';
import classes from './PokemonCard.module.css';
function PokemonCard(props){
    return (
    <div className={classes.card}>
        <h2>{props.name}</h2>
        </div>
    );
}

export default PokemonCard;