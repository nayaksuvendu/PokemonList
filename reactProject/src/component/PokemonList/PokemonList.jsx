import React, { useEffect, useState } from 'react'
import './pkmList.css'
// import axios from'axios';
import Pokemon from '../pokemon/pokemon.jsx';
import usePokemonlist from '../../UserDefinedHook/usePokemonlist.jsx';
export default function PokemonList() {

//     // const[pokemonList,setPokemon]=useState([]);
//     // const[isLoading,setLoading]=useState(true);
//     // const[url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon');
//     // const[preUrl,setPreUrl]=useState('');
//     // const[nextUrl,setNextUrl]=useState('');
//                 //Or(advance UseSate() use)
//     // here we bind all state into a state inform of a object            
//     const[PokemonListState,setPokemonState]=useState(
//         {
//           pokemonList:[],
//           isLoading:true,
//           url:'https://pokeapi.co/api/v2/pokemon',
//           preUrl:'',
//           nextUrl:''
//         }
//     )            

//    async function downloadPokemon(){ // using featch Api get data from url
//         //  setLoading(true);
//          // first we unpack state then override variable
//         setPokemonState((state)=>({...state,isLoading:true}));
//         //  const response=await fetch(url).then((res)=>{return res.json()})
//         //  console.log(response.results);
//                   //Or(fetch/Axios)
//         //  const response=await axios.get(url);
//         const response=await axios.get(PokemonListState.url);
//         const result= response.data.results;//get array
//         // setPreUrl(response.data.previous);
//         // setNextUrl(response.data.next)
//         setPokemonState((state)=>({
//           ...state,
//           preUrl:response.data.previous,
//           nextUrl:response.data.next

//         }));

//         const AllPok= result.map((pkm)=>axios.get(pkm.url))//get url from array that store in new Array
//         //  const AllPok= result.map((pkm)=>fetch(pkm.url))
//        console.log(AllPok);
//        const PokData=await axios.all(AllPok)// featch all data of each pokemon by going into each Array
//        console.log(PokData);
//        // itterate over each pokemon data and extract id,name,type
//         const value=PokData.map(
//             (pd)=>{const pokemon=pd.data;
//                    return{
//                     name:pokemon.name,
//                     image:pokemon.sprites.other.dream_world.front_default,
//                     id:pokemon.id,
//                     type:pokemon.type
//                   }
//                   }
//           )
//         setPokemonState((state)=>({...state,
//           pokemonList:value,
//           isLoading:false}));
//     } // (...)=> is splitertor operator

//  useEffect(()=>{downloadPokemon()},[PokemonListState.url]) // here if we don't give [] then UseEffect call for each data render
//                                        //otherwise call once in first render or if we give any variable in
//                                        // [] then additionally it calls for each var change
            // OR(By using custom Hook)

  const[PokemonListState,setPokemonState] = usePokemonlist();
return (
  <div className='pkmList'>
     <div>PokemonList </div>
      <div className='pok'>
        {(PokemonListState.isLoading) ? 'loading....' : PokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)          
        }
      </div>
       <div>
  <button className='controls' disabled={PokemonListState.preUrl==null} onClick={()=>{setPokemonState({...PokemonListState,url:PokemonListState.preUrl})}}>pre</button>
  <button className='controls'disabled={PokemonListState.nextUrl==null} onClick={()=>{setPokemonState({...PokemonListState,url:PokemonListState.nextUrl})}}>next</button> 
      </div>
    </div>
  )
}
