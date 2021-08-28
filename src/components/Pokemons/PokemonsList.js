import React from 'react';
import PokemonCard from './PokemonCard';
function PokemonList(props){
    return (<div>
        {props.pokemons.map((pokemon)=>(
            <PokemonCard name={pokemon.name} url={pokemon.url}/>
        ))}
        </div>
        )
}

export default PokemonList;