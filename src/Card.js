import {useState, useEffect} from 'react';
import styles from './Card.module.css'
const Card = ({task='', onRemove})=> {

    return(
        <div className={styles.card}> 
            <p>{task}</p>
            <button onClick={onRemove}>x</button>
        </div>
    )
}

export default Card;