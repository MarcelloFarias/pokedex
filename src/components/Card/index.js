import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ id, name, image, type }) => {

    const pokemonCardClass = `pokemon-card ${type}`;

    return(
        <>
            <Link to={`/details/${id}`} style={{textDecoration: 'none', color: '#000'}}>
                <div className={pokemonCardClass}>
                    <div className='pokemon-id'>
                        <span>#{id}</span>    
                    </div>

                    <div className='pokemon-image'>
                        <img className="pokemon-sprite" src={image} alt={name} />    
                    </div>

                    <h3>{name}</h3>
                    <small>Type: {type}</small>    
                </div>
            </Link>
        </>
    );
}

export default Card;