import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';


function usePokemonDetails(id,SearchName,name) {
    const[PokemonState,setPokemon]=useState({});//declare empty object
    // const {id}=useParams()// take id i.e. indexNo from url

 async function downloadPokemon(){
  try{
      let response;
      if(SearchName){
    response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${SearchName}`)
      }
      else if(name){
        response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      }
      else{
        response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
      }
    console.log(response.data)
    const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name  : ''}`);
    const TopPok= pokemonOfSameTypes.data.pokemon.slice(0,10) //get only 1-5 index data
    setPokemon({ name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((t) => t.type.name),// here we get data from types[]
        similarPokemons: TopPok
    }) 
  }
  catch(error) {
console.log('something went wrong')
 }
    }
    useEffect(()=>{downloadPokemon()},[name]) // only execute on name request

  return {PokemonState}
}

export default usePokemonDetails