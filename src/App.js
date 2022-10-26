import React, { useState, useEffect } from 'react';
import Card from './components/Card/index.js';
import Header from './components/Header/index.js';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20');
  const [inputValue, setInputValue] = useState('');

  async function getPokemons() {
    const res = await fetch(url);
    const data = await res.json();

    setUrl(data.next);

    function setAllPokemons(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`);
        const data = await res.json();

        pokemons.push(data);
        setPokemons([...pokemons]);
      });
    }
    setAllPokemons(data.results);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <> 
      <Header value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

      <main>
        <div className='pokemons'>
            {pokemons.filter((pokemon) => {
              if(inputValue === '') {
                return pokemon;
              }
              else if(pokemon.name.toLowerCase().includes(inputValue.toLowerCase())) {
                return pokemon;
              }
            }).map((pokemon, index) => {
              return <Card key={index}
                           id={pokemon.id}
                           name={pokemon.name}
                           image={pokemon.sprites.front_default}
                           type={pokemon.types[0].type.name}/>
            })}
        </div>
        <button className='btn-load-more' onClick={() => getPokemons()}>Load More</button>
      </main>
    </>
  );
}

export default App;