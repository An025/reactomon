import React, {useState, useEffect} from 'react';
import classes from "./Container.module.css";
import axios from 'axios';
import Image from '../UI/Image';
import {
    useParams
  } from "react-router-dom";
  

function PokemonDetails(props){
    let { id } = useParams();

    const[pokemonDetail, setPokemonDetail] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [types, setTypes] = useState([]);
    useEffect(()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
          setPokemonDetail(response.data);
          setImageUrl(response.data.sprites.front_default);
          setTypes( response.data.types.map((e) => e.type.name))
      })
      
    }, [id])
    console.log(pokemonDetail)
    return (<div className={classes.container}>
            <h1> {pokemonDetail.name}</h1>
            <div className={classes.imageContainer}>
                <Image path={imageUrl} title={props.name}/>
                <table className={classes.table}>
                    <tr>
                        <td>Height:</td>
                        <td>{pokemonDetail.height}</td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td>{pokemonDetail.weight}</td>
                    </tr>
                    <tr>
                        <td>Types:</td>
                        <td>{(types).join(", ")}</td>
                    </tr>
                </table>
            </div>

        </div>)
    }

export default PokemonDetails;