import React, { useState } from 'react'
import SearchBar from '../components/search'
import { useParams } from 'react-router'

export default function SearchResult() {
  const [price, setPrice] = useState("");
  let {search} = useParams();

  const fetchPrice = async (search) => {
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/currentPrice`);
      const data = await response.json();
      console.log(data);
      
      setPrice(data);

    }
    catch(e){
      console.log(e)
      setPrice(0);
    }
  }

  fetchPrice(search)



  return (


    <div>
      <SearchBar />
      <h1>

      SearchResult

      </h1>
      <h2>
        {search}
        <br></br>
        {price}
      </h2>


        
    </div>

  )
}
