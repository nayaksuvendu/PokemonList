import React, { useState } from 'react'
import Search from '../search/Search.jsx'
import './pokedex.css'
import PokemonList from '../PokemonList/PokemonList.jsx'
import PokemonDetails from '../pokemonDetails/PokemonDetails.jsx';
export default function Pokedex() {
  const[SearchItem,setSearchItem]=useState();
  return (
     <div className='poke-wraper'>
      {/* here Searching is passing as arug. in Search */}
        <Search Searching={setSearchItem}/>
        {/* <PokemonList/> */}
        {(!SearchItem) ? <PokemonList/> : <PokemonDetails SearchName={SearchItem} key={SearchItem}/>}
    </div>
  )
}
