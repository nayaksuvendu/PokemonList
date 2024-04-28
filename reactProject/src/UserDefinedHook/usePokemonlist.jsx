import React, { useEffect, useState } from 'react'
import axios from'axios';

function usePokemonlist() {
    const[PokemonListState,setPokemonState]=useState(
        {
          pokemonList:[],
          isLoading:true,
          url:'https://pokeapi.co/api/v2/pokemon',
          preUrl:'',
          nextUrl:''
        }
    )

 async function downloadPokemon(){ // using featch Api get data from url
         // first we unpack state then override variable
        setPokemonState((state)=>({...state,isLoading:true}));
        const response=await axios.get(PokemonListState.url);
        const result= response.data.results;//get array
        setPokemonState((state)=>({
          ...state,
          preUrl:response.data.previous,
          nextUrl:response.data.next
        }));
       const AllPok= result.map((pkm)=>axios.get(pkm.url))//get url from array that store in new Array
       console.log(AllPok);
       const PokData=await axios.all(AllPok)// featch all data of each pokemon by going into each Array
       console.log(PokData);
       
       // itterate over each pokemon data and extract id,name,type
        const value=PokData.map(
            (pd)=>{const pokemon=pd.data;
                   return{
                    name:pokemon.name,
                    image:pokemon.sprites.other.dream_world.front_default,
                    id:pokemon.id,
                    type:pokemon.type
                  }
                  }
          )
    setPokemonState((state)=>({...state,
          pokemonList:value,
          isLoading:false
        }));
 } // (...)=> is splitertor operator

 useEffect(()=>{downloadPokemon()},[PokemonListState.url]) // here if we don't give [] then UseEffect call for each data render
                                       //otherwise call once in first render or if we give any variable in
                                       // [] then additionally it calls for each var change
 
return (
    [PokemonListState,setPokemonState]
  )
}

export default usePokemonlist