import React from 'react'
import './search.css';
import useDebouncing from '../../UserDefinedHook/useDebouncing';
export default function Search({Searching}) {
  const debounce=useDebouncing(((e)=>Searching(e.target.value)),3000)
  return (
    <div className='search_wraper'>
      <input id='input_search' type='text' 
      placeholder='Pokemon name'
      onChange={debounce}
      />
     </div>
     )
}
