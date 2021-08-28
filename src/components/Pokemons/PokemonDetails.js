import React from 'react';

function PokemonDetails(props){
    return <h1>{`https://pokeapi.co/api/v2/pokemon-species/${props.id}`}</h1>
}

export default PokemonDetails;