import { React, useState } from 'react'
import { Line } from "react-chartjs-2";
import jsonFile from './treasuryData.json'


const Historicalyields = () => {

  const [maturity, setmaturity] = useState("1 Mo")

  
  
  const MaturityData = (maturity) => {
    let OneMonth = []
  
    let temp = Object.keys(jsonFile).map(key => jsonFile[key])
    for (let k=0; k<temp.length; k++){
  
      let OneMo = temp[k][maturity]
      
      OneMonth.push(OneMo)
    }
    return OneMonth
  
  }
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