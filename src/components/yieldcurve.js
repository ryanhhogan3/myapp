import React, { useState } from 'react'
import { Line } from "react-chartjs-2";
import jsonFile from './treasuryData.json'


const YieldCurve = () => {

  const [initdate, setDate] = useState(0)

  const getJSONvalues = (initdate) => {
    let obj = Object.keys(jsonFile)
    let ind = obj[initdate]
    return ind

  }

  


  // get maturities
  const getMasteryArray = (initdate) => {
    let initValues = Object.values(jsonFile)
    let dayOfArray = initValues[initdate]
    // console.log(mats1)
    // console.log(Object.keys(mats1))
    // console.log('Keys above, vals below')
    
    return dayOfArray
  }

  // console.log(getMasteryArray(2))

  const notOverMax = (num) => {
    let max = 30;
    if (num + max < 159){
      return num+max;
    }
    else{
      return 159
    }
  }


  const setdata = (initdate) => {
    let init30day = notOverMax(initdate)
    const data = {
    labels: Object.keys(getMasteryArray(initdate)),
    datasets: [
      {
        label: "Yeild Curve",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: Object.values(getMasteryArray(initdate)),
      },
      {
        label: "30 before from selected date",
        backgroundColor: "rgb(30, 199, 32)",
        borderColor: "rgb(30, 199, 32)",
        data: Object.values(getMasteryArray(init30day)),
      },
      
    ],
  };
  return data;
}


    const dates = Object.keys(jsonFile)
    
    // console.log(Object.values(options))


    return (

      <div id='chart-area'>
        <select>
        {
          dates.map((date, index) => (
            <option onClick={()=>setDate(index)} value={date.value}> {date}</option>
          
          ))
        }
            
          </select>
        
        
        
        <Line data={setdata(initdate)} />
        
      </div>
    );

};

export default YieldCurve;