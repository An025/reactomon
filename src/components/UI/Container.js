import React from 'react';
import classes from './Container.module.css'

function Container(props){
    return <div className={classes.container} >
        <h2>{props.title}</h2>
    </div>
}

export default Container;