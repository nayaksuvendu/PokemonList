import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pokedex from '../component/pokedex/Pokedex.jsx'
import PokemonDetails from '../component/pokemonDetails/PokemonDetails.jsx'
export default function PokeRouter() {
         // here all router defined
  return (
        <Routes>
            <Route path='/' element={<Pokedex/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
            <Route path='/:name' element={<PokemonDetails/>}/> 
        </Routes>
  )
}
// ":" helps to useParam() to retrive id,name from url
