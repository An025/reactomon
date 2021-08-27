import React from 'react';
import classes from './Card.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Card(props){
    return <div className={classes.card} ></div>
}

export default Card;