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
      const labels = Object.keys(closePrices).map(date => new Date(date).toLocaleString('default', { month: 'short' }));
        const data = {
          labels: labels,
          // Object.keys(closePrices)
          datasets: [
            {
              label: "Price",
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Use a color that suits your dark theme
              borderColor: "rgba(75, 192, 192, 1)", // Use a color that suits your dark theme
              data: values,
              pointRadius:0,

            },
            
          ],
        };
        
        return data
      }
      // Add global styles for a dark and modern theme
      const options = {
        plugins: {
          legend: {
            display: false, // Set display to false to hide the legend
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)', // X-axis tick color
            },
          },
          y: {
            grid: {
              display: true,
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)', // Y-axis tick color
            },
          },
        },
      }
      


      // returns the stock chart and the ticker searched for
    return(


    <div className="stock-chart">
           
        <p>
            
            <br></br>
            {props.stock}
            <br></br>
            <Line data={setChart()} height={props.height} options={options}/>
        </p>
    </div>
    )
}

export default StockChart