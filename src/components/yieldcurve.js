import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import jsonFile from "./treasuryData.json";
import Table from "rc-table";

// main function that creates yield curve and yeild table
const YieldCurve = () => {
  const [initdate, setDate] = useState(0);

  // api fetch function to fetch the treasury data 
  const handleFetchData = async () => {
    const response = await fetch('https://flask-api-finlabs-b778fe863ba1.herokuapp.com/treasuries');
    const data = await response.json();
    console.log(data);
    return data
  }

  // use effect to call api once
  useEffect(() => {
      handleFetchData();
  },[])  


  // table stuff ///////////////////////////////// table stuff //////////////
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 100,
    },
    {
      title: "1 Mo",
      dataIndex: "oneMo",
      key: "1 mo",
      width: 100,
    },
    {
      title: "2 Mo",
      dataIndex: "twoMo",
      key: "2 mo",
      width: 100,
    },
    {
      title: "3 Mo",
      dataIndex: "threeMo",
      key: "3 mo",
      width: 100,
    },
    {
      title: "4 Mo",
      dataIndex: "fourMo",
      key: "4 mo",
      width: 100,
    },
    {
      title: "6 Mo",
      dataIndex: "sixMo",
      key: "6 mo",
      width: 100,
    },
    {
      title: "1 Yr",
      dataIndex: "oneYr",
      key: "1 yr",
      width: 100,
    },
    {
      title: "2 Yr",
      dataIndex: "twoYr",
      key: "2 yr",
      width: 100,
    },{
      title: "3 Yr",
      dataIndex: "threeYr",
      key: "3 yr",
      width: 100,
    },{
      title: "5 Yr",
      dataIndex: "fiveYr",
      key: "5 yr",
      width: 100,
    },{
      title: "7 Yr",
      dataIndex: "sevenYr",
      key: "7 yr",
      width: 100,
    },{
      title: "10 Yr",
      dataIndex: "tenYr",
      key: "10 yr",
      width: 100,
    },{
      title: "20 Yr",
      dataIndex: "twentyYr",
      key: "20 yr",
      width: 100,
    },{
      title: "30 Yr",
      dataIndex: "thirtyYr",
      key: "30 yr",
      width: 100,
    },
  ];




  // sets the treasury table based on the table index parameter
  const setTable = (tableindex) => {

    // sets the initial 30 day mark that cannot exceed the first data point in the treasury data to avoid
    // takes the initdate useState variable and gets the date 30 days ago, not going beyond the start of the data set 
    let init30day = notOverMax(initdate);

    // sets the data points to the object values and keys indexed by the tableindex paramete which is a date
    const data = [
      {
        date: Object.keys(jsonFile)[tableindex],
        oneMo: Object.values(jsonFile)[tableindex]["1 Mo"],
        twoMo:Object.values(jsonFile)[tableindex]["2 Mo"],
        threeMo:Object.values(jsonFile)[tableindex]["3 Mo"],
        fourMo:Object.values(jsonFile)[tableindex]["4 Mo"],
        sixMo:Object.values(jsonFile)[tableindex]["6 Mo"],
        oneYr:Object.values(jsonFile)[tableindex]["1 Yr"],
        twoYr:Object.values(jsonFile)[tableindex]["2 Yr"],
        threeYr:Object.values(jsonFile)[tableindex]["3 Yr"],
        fiveYr:Object.values(jsonFile)[tableindex]["5 Yr"],
        sevenYr:Object.values(jsonFile)[tableindex]["7 Yr"],
        tenYr:Object.values(jsonFile)[tableindex]["10 Yr"],
        twentyYr:Object.values(jsonFile)[tableindex]["20 Yr"],
        thirtyYr:Object.values(jsonFile)[tableindex]["30 Yr"],
  
        
      },
      {
        date: Object.keys(jsonFile)[init30day],
        oneMo: Object.values(jsonFile)[init30day]["1 Mo"],
        twoMo:Object.values(jsonFile)[init30day]["2 Mo"],
        threeMo:Object.values(jsonFile)[init30day]["3 Mo"],
        fourMo:Object.values(jsonFile)[init30day]["4 Mo"],
        sixMo:Object.values(jsonFile)[init30day]["6 Mo"],
        oneYr:Object.values(jsonFile)[init30day]["1 Yr"],
        twoYr:Object.values(jsonFile)[init30day]["2 Yr"],
        threeYr:Object.values(jsonFile)[init30day]["3 Yr"],
        fiveYr:Object.values(jsonFile)[init30day]["5 Yr"],
        sevenYr:Object.values(jsonFile)[init30day]["7 Yr"],
        tenYr:Object.values(jsonFile)[init30day]["10 Yr"],
        twentyYr:Object.values(jsonFile)[init30day]["20 Yr"],
        thirtyYr:Object.values(jsonFile)[init30day]["30 Yr"],
  
        
      },
      {
        // calculates the spread of all the maturities for each tableindex (date) parameter
        date: "Spread",
        oneMo:(Object.values(jsonFile)[tableindex]["1 Mo"]-Object.values(jsonFile)[init30day]["1 Mo"]).toFixed(3),
        twoMo:(Object.values(jsonFile)[tableindex]["2 Mo"]-Object.values(jsonFile)[init30day]["2 Mo"]).toFixed(3),
        threeMo:(Object.values(jsonFile)[tableindex]["3 Mo"]-Object.values(jsonFile)[init30day]["3 Mo"]).toFixed(3),
        fourMo:(Object.values(jsonFile)[tableindex]["4 Mo"]-Object.values(jsonFile)[init30day]["4 Mo"]).toFixed(3),
        sixMo:(Object.values(jsonFile)[tableindex]["6 Mo"]-Object.values(jsonFile)[init30day]["6 Mo"]).toFixed(3),
        oneYr:(Object.values(jsonFile)[tableindex]["1 Yr"]-Object.values(jsonFile)[init30day]["1 Yr"]).toFixed(3),
        twoYr:(Object.values(jsonFile)[tableindex]["2 Yr"]-Object.values(jsonFile)[init30day]["2 Yr"]).toFixed(3),
        threeYr:(Object.values(jsonFile)[tableindex]["3 Yr"]-Object.values(jsonFile)[init30day]["3 Yr"]).toFixed(3),
        fiveYr:(Object.values(jsonFile)[tableindex]["5 Yr"]-Object.values(jsonFile)[init30day]["5 Yr"]).toFixed(3),
        sevenYr:(Object.values(jsonFile)[tableindex]["7 Yr"]-Object.values(jsonFile)[init30day]["7 Yr"]).toFixed(3),
        tenYr:(Object.values(jsonFile)[tableindex]["10 Yr"]-Object.values(jsonFile)[init30day]["10 Yr"]).toFixed(3),
        twentyYr:(Object.values(jsonFile)[tableindex]["20 Yr"]-Object.values(jsonFile)[init30day]["20 Yr"]).toFixed(3),
        thirtyYr:(Object.values(jsonFile)[tableindex]["30 Yr"]-Object.values(jsonFile)[init30day]["30 Yr"]).toFixed(3),
  
        
      },
    ];

    return data

  };

  /////////////////////////////////////////////////////////////////////

  // get maturities from the treasury json file with the date parameter as the indexer
  const getMasteryArray = (initdate) => {
    let initValues = Object.values(jsonFile);
    let dayOfArray = initValues[initdate];

    return dayOfArray;
  };

  // calculates the max days the indexer can go back in time (date) to avoid 
  const notOverMax = (num) => {
    let max = 20;
    if (num + max < 159) {
      return num + max;
    } else {
      return 159;
    }
  };
// sets the data of the chart with the initdate parameter (date) being used as the indexer for the entire json data file
  const setdata = (initdate) => {
    let init30day = notOverMax(initdate);
    const data = {
      labels: Object.keys(getMasteryArray(initdate)),
      datasets: [
        {
          label: "Selected Date's Yields",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: Object.values(getMasteryArray(initdate)),
        },
        {
          label: Object.keys(jsonFile)[init30day],
          backgroundColor: "rgb(30, 199, 32)",
          borderColor: "rgb(30, 199, 32)",
          data: Object.values(getMasteryArray(init30day)),
        },
      ],
    };
    return data;
  };

  // sets the date constant to the keys of the json file
  const dates = Object.keys(jsonFile);

  // returns the chart and table, and selector
  return (
    <div id="chart-area">
      <select>
        {dates.map((date, index) => (
          <option onClick={() => setDate(index)} value={date.value}>{date}</option>
        ))}
      
      </select>

      <Line data={setdata(initdate)} />

      <br />
      <div className="Yield-Table">
        <h5>
          <Table columns={columns} data={setTable(initdate)} />
        </h5>
      </div>
    </div>
  );
};

export default YieldCurve;
