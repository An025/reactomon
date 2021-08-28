import React from 'react';
import classes from './TypesList.module.css';
import Button from './../UI/Button'
function TypesList(props){
    return (<div className={classes.list}>
        {props.types.map((type)=>(
            
                <Button title={type.name}/>
            
        ))}
        </div>
        )
}

export default TypesList;