import React from 'react'
import './App.css'
import PokeRouter from './UserRouter/PokeRouter.jsx'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='outerPokedex'>
    <Link to='/' id='pokedex'>Pokedex</Link> 
     <PokeRouter/>
     </div>
    </>
  )
}

export default App
