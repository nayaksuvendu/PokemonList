import axios from 'axios';
import React, { useState } from 'react'
// import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './pokemonDetails.css';
import usePokemonDetails from '../../UserDefinedHook/usePokemonDetails.jsx';
import { useEffect } from 'react';

export default function PokemonDetails({SearchName}) {
    // const[pokemon,setPokemon]=useState({});//declare empty object
    // const {id}=useParams()// take id from url
    // async function downloadPokemon(){
    // let response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // console.log(response.data)
    //   setPokemon({ name: response.data.name,
    //     image: response.data.sprites.other.dream_world.front_default,
    //     weight: response.data.weight,
    //     height: response.data.height,
    //     types: response.data.types.map((t) => t.type.name),// here we get data from types[]
    // }) 
    // }
    // useEffect(()=>{downloadPokemon()},[setPokemon]) // only execute on first request
    const {id,name}=useParams()// take id i.e. indexNo from url
    const{PokemonState}=usePokemonDetails(id,SearchName,name);
    
  return (    
          <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={PokemonState.image} />
            <div className="pokemon-details-name"><span>{PokemonState.name}</span></div>
            <div className="pokemon-details-name">Height: {PokemonState.height}</div>
            <div className="pokemon-details-name">Weight: {PokemonState.weight}</div>
            <div className="pokemon-details-types">
                {PokemonState.types && PokemonState.types.map((t) => <div key={t}> {t} </div>)}
            </div>

            <div>
              {PokemonState.types && PokemonState.similarPokemons &&
              <div className='Ptypes'>
                   More <span >{PokemonState.types}</span> type Pokemons 

                   <ul className='similar'>
                   {PokemonState.similarPokemons.map((p)=><li key={p.pokemon.url}><Link to={`/${p.pokemon.name}`}>{p.pokemon.name}</Link></li>)}
                    </ul>
            </div>
               }
         </div>
         </div>
  )
}
