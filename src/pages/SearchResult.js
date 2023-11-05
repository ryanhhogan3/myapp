import React from 'react'
import SearchBar from '../components/search'
import { useParams } from 'react-router'

export default function SearchResult() {
  let {search} = useParams();



  return (


    <div>
      <SearchBar />
      <h1>

      SearchResult

      </h1>
      <h2>
        {search}
      </h2>


        
    </div>

  )
}
