import { React } from 'react'
import { Line } from "react-chartjs-2";
import jsonFile from './treasuryData.json'


const Allyeilds = () => {



  
  
  const MaturityData = (maturity) => {
    let OneMonth = []
  
    let temp = Object.keys(jsonFile).map(key => jsonFile[key])
    for (let k=0; k<temp.length; k++){
  
      let OneMo = temp[k][maturity]
      
      OneMonth.push(OneMo)
    }
    return OneMonth
  
  }
  const setData = () =>{
   const data = {
    labels: Object.keys(jsonFile),
    datasets: [
      {
        label: "1 Mo",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: MaturityData("1 Mo"),
      },
      {
        label: "2 Mo",
        backgroundColor: "rgb(66, 116, 0)",
        borderColor: "rgb(66, 116, 0)",
        data: MaturityData("2 Mo"),
      },
      {
        label: "3 Mo",
        backgroundColor: "rgb(155, 116, 0)",
        borderColor: "rgb(155, 116, 0)",
        data: MaturityData("3 Mo"),
      },
      {
        label: "4 Mo",
        backgroundColor: "rgb(255, 170, 0)",
        borderColor: "rgb(255, 170, 0)",
        data: MaturityData("4 Mo"),
      },
      {
        label: "6 Mo",
        backgroundColor: "rgb(255, 170, 193)",
        borderColor: "rgb(255, 170, 193)",
        data: MaturityData("6 Mo"),
      },
      {
        label: "1 Yr",
        backgroundColor: "rgb(14, 170, 193)",
        borderColor: "rgb(14, 170, 193)",
        data: MaturityData("1 Yr"),
      },
      {
        label: "2 Yr",
        backgroundColor: "rgb(14, 43, 193)",
        borderColor: "rgb(14, 43, 193)",
        data: MaturityData("2 Yr"),
      },
      {
        label: "3 Yr",
        backgroundColor: "rgb(66, 116, 0)",
        borderColor: "rgb(66, 116, 0)",
        data: MaturityData("3 yr"),
      },
      {
        label: "5 Yr",
        backgroundColor: "rgb(14, 221, 193)",
        borderColor: "rgb(14, 221, 193)",
        data: MaturityData("5 Yr"),
      },
      {
        label: "7 Yr",
        backgroundColor: "rgb(153, 12, 193)",
        borderColor: "rgb(153, 12, 193)",
        data: MaturityData("7 Yr"),
      },
      {
        label: "10 Yr",
        backgroundColor: "rgb(66, 116, 0)",
        borderColor: "rgb(66, 116, 0)",
        data: MaturityData("10 Yr"),
      },
      {
        label: "20 Yr",
        backgroundColor: "rgb(254, 12, 28)",
        borderColor: "rgb(254, 12, 28)",
        data: MaturityData("20 Yr"),
      },
      {
        label: "30 Yr",
        backgroundColor: "rgb(254, 216, 28)",
        borderColor: "rgb(254, 216, 28)",
        data: MaturityData("30 yr"),
      },
    ],
  };
  return data
  }



  return (
    <div id='chart-area'>

      
     
          
      
      <Line data={setData()} />
      
    </div>
  );
};

export default Allyeilds;