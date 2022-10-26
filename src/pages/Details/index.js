import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css';
import { Link } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPokemon(data);
        })
        .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            <header>
                <h1>{pokemon?.name}</h1>
            </header>

            <main>
                <div className="pokemon-details-number">
                    <span>Number: {pokemon?.id}</span>
                </div>

                <div className="pokemon-details-sprite">
                    <img src={pokemon?.sprites?.front_default} />
                </div>

                <div className="pokemon-heigth-weigth">
                    <span>Heigth: {pokemon?.height / 10} m</span>
                    <span>Weigth: {pokemon?.weight / 10} kg</span>
                </div>

                <div className="moves-abilities">
                    <div className="pokemon-details-moves">
                        <span>Moves: </span>

                        <ul className="pokemon-moves-list">
                            {pokemon?.moves?.map((item, index) => {
                                return (
                                    <li className="pokemon-move" key={index} >- {item.move.name}</li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="pokemon-details-abilities">
                        <span>Abilities: </span>

                        <ul className="pokemon-abilities-list">
                            {pokemon?.abilities?.map((item, index) => {
                                return (
                                    <li className="pokemon-ability" key={index}>- {item.ability.name}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <Link to='/' className="btn-back">Back</Link>
            </main>
        </>
    );
}

export default Details;