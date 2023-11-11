import React, { useEffect, useState } from 'react'
import SearchBar from '../components/search'
import { Bar } from "react-chartjs-2";
import { useParams } from 'react-router'

export default function SearchResult() {
  const [price, setPrice] = useState("");
  const [ytdreturn, setytdreturn] = useState("");
  const [volData1Y, setvolData1Y] = useState("")

  let {search} = useParams();

  
  const fetchPrice = async (search) => {
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/currentPrice`);
      const data = await response.json();

      
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

      
      setytdreturn(data);

    }
    catch(e){
      console.log(e)
      setytdreturn(0);
    }
  }
  const fetch1yVolume = async (search) => {
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/volume/1y`);
      const data = await response.json();

      
      setvolData1Y(data);

    }
    catch(e){
      console.log(e)
      setvolData1Y(0);
    }
  }


  

  fetch1yVolume(search)

  fetchPrice(search)
  fetchYTDreturn(search)
  // console.log(Object.values(Object.values(volData1Y)))
  
  
  const getVolumeValues = () => {
    let emptyArray = []
    for(let k=0; k<Object.keys(volData1Y).length; k++){
      let newVal = Object.values(volData1Y)[k].Volume
      emptyArray.push(newVal)

    }
    return emptyArray
  }
  // console.log(Object.values(volData1Y)[1].Volume)
  let Volumes = getVolumeValues()
  console.log('!!!!')

  // console.log(Object.keys(volData1Y))
  // console.log(Object.values(volData1Y)['Volume'])
  // console.log(Object.values(volData1Y).Volume)
  
  const setChart = () => {
    const data = {
      labels: Object.keys(volData1Y),
      datasets: [
        {
          label: "Volume",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: Volumes,
        },
      ]
    };
    return data
  }
  


  return (


    <div>
      <SearchBar />
      <div className='stock-data-container'>
      
      <h2>
        {search}
        <br></br>
        {price}
        <br></br>
        {ytdreturn}%
        <br></br>
      </h2>
      {/* <div className="Chart-container"> */}
        <div className="Charts">

          <Bar data={setChart()} />

        </div>
      


      </div>



      </div>
    // </div>

  )
}
