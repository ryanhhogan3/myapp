import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";



const StockChart = (props) => {
    const [closePrices, setClosePrices] = useState("")

    // calls the flask api for the close price data
    const fetchCloseData = async (search) => {
        console.log('ran close api call')
        try{
          const response = await fetch(`https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/price/1y`);
          const data = await response.json();
          setClosePrices(data);
        }
        catch(e){
          console.log(e)
          setClosePrices(0);
        }
      }

      // use effect calls the api fetch function once upon search prop change
      useEffect(() =>{
            console.log('useEffect called')
            fetchCloseData(props.stock)
      },
       [props.stock])

    const values = Object.values(closePrices).map(({Close}) => Close)
    // console.log(values)
    

    // sets the chart with the close price data
    const setChart = () => {
        const data = {
          labels: Object.keys(closePrices),
          datasets: [
            {
              label: "Price",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: values,
              pointRadius:0,

            },
            
          ],
          options: {
            scales: {
              x: {
                grid: {
                  display: false,
                }
              },
              y: {
                grid: {
                  display: false
                }
              }
            }
          }
        }
        
        return data
      }

      // returns the stock chart and the ticker searched for
    return(


    <div className="stock-chart">
        <p>
            Stock Price Chart
            <br></br>
            {props.stock}
            <br></br>
            <Line data={setChart()} height={props.height}/>
        </p>
    </div>
    )
}

export default StockChart