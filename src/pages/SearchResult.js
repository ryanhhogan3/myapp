import React, { useEffect, useState } from 'react'
import SearchBar from '../components/search'
import { Bar } from "react-chartjs-2";
import { useParams } from 'react-router'
import StockChart from '../components/stockpricechart';
import Footer from '../components/footer';
import SecDataChart from '../components/secvizuals';
import ReturnsTable from '../components/returnstable';
import './SearchResults.style.css'



//notes: in the future maybe think about breaking these api calls and functions and charts into seperate microservices within the component, thus calling these components inside the search result render with the search parameter as input


// exporting a function 
export default function SearchResult() {
  const [price, setPrice] = useState("");
  const [ytdreturn, setytdreturn] = useState("");
  const [volData1Y, setvolData1Y] = useState("")

  // uses the parameters passed to it in the home page / search page
  let {search} = useParams();

  // fetches the price of the input search ticker
  // sets the price use state variable and handles the errors
  const fetchPrice = async (search) => {
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/currentPrice`);
      const data = await response.json();
      console.log('Fetched price')
      setPrice(data);
    }
    catch(e){
      console.log(e)
      setPrice(0);
    }
  }

  // fetches the ytd return of the input search (ticker) and calls the flask api
  // updates the ytd return use state object and handles the errors
  const fetchYTDreturn = async (search) => {
    console.log('ran ytd api call')
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/returns/ytd`);
      const data = await response.json();
      setytdreturn(data);
    }
    catch(e){
      console.log(e)
      setytdreturn(0);
    }
  }

  // fetches the 1 year volume from the flask api with input (ticker)
  // updates the volume data use state object and handles the errors
  const fetch1yVolume = async (search) => {
    try{
      const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/volume/1y`);
      const data = await response.json();
      console.log('ran vol api call')
      setvolData1Y(data);
    }
    catch(e){
      console.log(e)
      setvolData1Y(0);
    }
  }
  
  // gets the volume values from the volume data use state variable and parses the data
  // first creating an empty array, then looping over the volume data appending the ONLY the volume data values to the list. NO keys.
  const getVolumeValues = () => {
      console.log('ran vol func')
      let emptyArray = []
      for(let k=0; k<Object.keys(volData1Y).length; k++){
        let newVal = Object.values(volData1Y)[k].Volume
        emptyArray.push(newVal)
        
      }
      return emptyArray
    }
    
    // fuction to handle the settings of the chart which displays the volume data
    // for the data of the chart, it uses the 'volumes' variable which is defines below
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
    
    // assigns the Volumes variable to the 'getolumeValues' function, returning only the volume data points
    let Volumes = getVolumeValues()

    // useEffect to call the api fetch functions ONLY once, to avoid overload, and bans.
    // in the dependencies below "[ search ]" is the search use state variable. When
    // this variable changes, it recalls the functions above in the useEffect. This causes
    // all the entire page to re-render, calling the apis to get new data with a different 'search' variable
    useEffect(() => {

      fetch1yVolume(search);
      fetchPrice(search);
      fetchYTDreturn(search);
    }, [search]);
    
    // returns the volume bar chart which calls the set chart function
    // returns the stock chart compoennts which takes in the search 'property' / use state varibale
    return (
      
      <div className="homepage">
        
        <SearchBar />
  <div class="container">
  <div class="above-columns">
    <div class="column">
      <h2>{search}</h2>
      <p><br></br>
        {price}
        <br></br>
        {ytdreturn}%
        <br></br></p>
    </div>

    <div class="column">
      <h2>Column 2 Above</h2>
      <StockChart stock={search} />
    </div>
  </div>

  <div class="below-columns">
    <div class="column">
      <h2>Column 1 Below</h2>
          <Bar data={setChart()} />
      <p>Some content here.</p>
    </div>

    <div class="column">
      <h2>Column 2 Below</h2>
      <p>Some content here.</p>
    </div>

    <div class="column">
      <h2>Column 3 Below</h2>
      <p>Some content here.</p>
    </div>
  </div>
  </div>
  </div>






       
  )
}
