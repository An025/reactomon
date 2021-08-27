import React from 'react';
import classes from './Image.module.css';

function Image (props){
    return <img className={classes.image} src={props.path} alt={props.title}/>
}


export default Image;