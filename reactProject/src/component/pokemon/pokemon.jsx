import React from 'react'
import {Link} from 'react-router-dom'
import './pokemon.css'
export default function Pokemon({name,image,id}) {
  return (
    <div className='pokemon'>
    <Link to={`/pokemon/${id}`}>
        <div className='pokemon-name'>{name}</div>
        <div>
            <img className='pokemon-image' src={image} />
        </div>
    </Link>
</div>
  )
}

//<Link> is react tag is same as <a> anchor tag and <link> not refreshed
