import { React, useState } from 'react'
import { Line } from "react-chartjs-2";
import jsonFile from './treasuryData.json'

// creates the historical yields chart where user can select the history of each maturity stored in the json file
const Historicalyields = () => {

  const [maturity, setmaturity] = useState("1 Yr")

  // gets the matury data based on the input data (maturity parameter)
  const MaturityData = (maturity) => {

    // empty array to append data to
    let OneMonth = []
    
    // loops through the object keys length appending data of the maturity parameter to the empty file
    let temp = Object.keys(jsonFile).map(key => jsonFile[key])
    // loop through the object keys 
    for (let k=0; k<temp.length; k++){
  
      let OneMo = temp[k][maturity]
      // push data to empty array
      OneMonth.push(OneMo)
    }
    return OneMonth
  
  }

  // sets the data for the chart based on the parameter tbill (maturity ex: 1mo, 2mo, etc.)
  const setData = (tbill) =>{
   const data = {
    labels: Object.keys(jsonFile),
    datasets: [
      {
        label: "Yeild Curve",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: MaturityData(tbill),
      },
    ],
  };
  return data
}


  // sets the const options to the avalible indexers for the user to choose from
  const options = [{
    label: "1 Mo",
    value: "1 Mo",
  },{
    label: "2 Mo",
    value: "2 Mo",
  },{
    label: "3 Mo",
    value: "3 Mo",
  },{
    label: "4 Mo",
    value: "4 Mo",
  },{
    label: "6 Mo",
    value: "6 Mo",
  },{
    label: "1 Yr",
    value: "1 Yr",
  },{
    label: "2 Yr",
    value: "2 Yr",
  },{
    label: "3 Yr",
    value: "3 Yr",
  },{
    label: "5 Yr",
    value: "5 Yr",
  },{
    label: "7 Yr",
    value: "7 Yr",
  },{
    label: "10 Yr",
    value: "10 Yr",
  },{
    label: "20 Yr",
    value: "20 Yr",
  },{
    label: "30 Yr",
    value: "30 Yr",
  }]

  // returns the chart and the options for the ser to select from
  // options.map maps all the avalible options defined above for the user to select
  // upon selection, the user  
  return (
    <div id='chart-area'>

      
      <select>

      
            {
              options.map((option) => (
                <option onClick={() => setmaturity(option.value)} value={option.value}>{option.label}</option>                
                
                ))}
                
            

          </select>
          
      
      <Line data={setData(maturity)} />
      
    </div>
  );
};

export default Historicalyields;