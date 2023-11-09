import React, { useState } from 'react'
import SearchBar from '../components/search'
import { useParams } from 'react-router'

export default function SearchResult() {
  const [price, setPrice] = useState("");
  const [ytdreturn, setytdreturn] = useState("");
  let {search} = useParams();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  const fetchPrice = async (search) => {
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/currentPrice`);
      const data = await response.json();
      console.log(data);
      
      await sleep(100)
      setPrice(data);

    }
    catch(e){
      console.log(e)
      setPrice(0);
    }
  }

  const fetchYTDreturn = async (search) => {
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/ytdreturn`);
      const data = await response.json();
      console.log(data);
      
      await sleep(100)
      setytdreturn(data);

    }
    catch(e){
      console.log(e)
      setytdreturn(0);
    }
  }

  fetchPrice(search)
  fetchYTDreturn(search)


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
        <br></br>
        {ytdreturn}
      </h2>


        
    </div>

  )
}
