import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";



const SecDataChart = (props) => {
    const [secData, setSecData] = useState("")

    // calls the flask api for the close price data
    const fetchCloseData = async (search) => {
        console.log('ran close api call')
        try{
          const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/annual/revenue`);
          const data = await response.json();
          setSecData(data);
        }
        catch(e){
          console.log(e)
          setSecData(0);
        }
      }

      // use effect calls the api fetch function once upon search prop change
      useEffect(() =>{
            console.log('useEffect called')
            fetchCloseData(props.stock)
      },
       [props.stock])

      const values = Object.values(secData).map(({val}) => val)
        // console.log(values)
      console.log(values)
    //console.log(Object.values(closePrices))

    // console.log((closePrices))


    // sets the chart with the close price data
    const setChart = () => {
        const data = {
          labels: Object.keys(secData),
          datasets: [
            {
              label: "Revenue",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: values,
            },
          ]
        };
        
        return data
      }

      // returns the stock chart and the ticker searched for
    return(


    <div className="stock-chart">
        <p>
            Stock Chart
            <br></br>
            {props.stock}
            <br></br>
            <Bar data={setChart()} height={props.height}/>
        </p>
    </div>
    )
}

export default SecDataChart