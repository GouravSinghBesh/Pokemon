import { useState,useEffect } from "react";
import React from 'react'

function App() {
const [loadPokemon, setloadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
const [allPokemons, setallPokemons] = useState([])

  async function getAllPokemon() {
    let res =await fetch(loadPokemon);
    let data =await res.json();
    setloadPokemon(data.next);
    
    function createPokemonObject(result) {
      result.forEach(async(pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        // console.log(data)
        // setallPokemons(data)
        setallPokemons(currentList => [...currentList,data])
        
      });
    }
    createPokemonObject(data.results)
  
  }

useEffect(() => {
  getAllPokemon();
}, [])


 return (<>
  <h1>Pokemon Kingdom</h1>
  {allPokemons.map((pokemon) => {
        console.log(pokemon)
  })
}
 </>);
}

export default App;
