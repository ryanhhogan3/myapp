import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const StockChart = (props) => {
  const [closePrices, setClosePrices] = useState("");

  // calls the flask api for the close price data
  const fetchCloseData = async (search) => {
    console.log("ran close api call");
    try {
      const response = await fetch(
        `https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/price/1y`
      );
      const data = await response.json();
      setClosePrices(data);
    } catch (e) {
      console.log(e);
      setClosePrices(0);
    }
  };

  // use effect calls the api fetch function once upon search prop change
  useEffect(() => {
    console.log("useEffect called");
    fetchCloseData(props.stock);
  }, [props.stock]);

  const values = Object.values(closePrices).map(({ Close }) => Close);
  // console.log(values)

  // sets the chart with the close price data
  const setChart = () => {
    const labels = Object.keys(closePrices).map((date) =>
      new Date(date).toLocaleString("default", { month: "short" })
    );
    const dateValues = Object.keys(closePrices);

    // Extracting close prices and calculating returns
    const closeValues = dateValues.map((date) => closePrices[date].Close);
    const returns = closeValues.map((value, index) => {
      const firstValue = closeValues[0];
      return ((value - firstValue) / firstValue) * 100; // Calculate return as a percentage
    });
    // Creating the first dataset for close prices
    const closePriceDataset = {
      label: "Close Price",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      data: closeValues,
      pointRadius: 0,
    };

    
    // Creating the second dataset for returns
    const returnDataset = {
      label: "Return (%)",
      backgroundColor: "rgba(255, 99, 132, 0.2)", // Adjust color as needed
      borderColor: "rgba(255, 99, 132, 1)", // Adjust color as needed
      data: returns,
      yAxisID: "returnAxis", // To use a separate y-axis for returns
      pointRadius: 0,
    };
    
    console.log(returnDataset)
    console.log(closePriceDataset)
    const data = {
      labels: labels,
      // Object.keys(closePrices)
      datasets: [
        // returnDataset,
        closePriceDataset
      ],
    };

    return data;
  };
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
          color: "rgba(255, 255, 255, 0.7)", // X-axis tick color
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)", // Y-axis tick color
        },
      },
    },
  };

  // returns the stock chart and the ticker searched for
  return (
    <div className="stock-chart">
      <p>
        <br></br>
        {props.stock}
        <br></br>
        <Line data={setChart()} height={props.height} options={options} />
      </p>
    </div>
  );
};

export default StockChart;
