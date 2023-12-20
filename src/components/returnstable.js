import React, { useEffect, useState } from 'react';
import "./returnstable.style.css"

const ReturnsTable = (props) => {
  console.log(props.search);
  const [fiveYearsReturns, setFiveYearsReturns] = useState([]);

  const fetchFiveYearsReturns = async (search) => {
    console.log("ran 5y api call");
    try {
      const response = await fetch(
        `https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/${search}/returns/monthly/5y`
      );
      const data = await response.json();
      setFiveYearsReturns(data);
    } catch (e) {
      console.error(e);
      // Handle the error accordingly, you might want to set the state to an empty array or handle it differently.
    }
  }

  useEffect(() => {
    console.log("useEffect called");
    fetchFiveYearsReturns(props.stock);
  }, [props.stock]);

  const uniqueYears = [...new Set(Object.values(fiveYearsReturns).map(item => item?.Start?.slice(-4)))];

  const getColorForReturn = (value) => {
    if (value > 0) {
      return '#006400'; // Dark green for positive returns
    } else if (value < 0) {
      return '#8b0000'; // Dark red for negative returns
    } else {
      return '#292929'; // Default color for zero returns
    }
  };

  const calculateAnnualSum = (year) => {
    return Object.values(fiveYearsReturns)
      .filter((item) => item?.Start?.slice(-4) === year)
      .reduce((sum, item) => sum + item.Returns, 0);
  };

  return (
    <div>
      <h2>Returns Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            {uniqueYears.map((year) => (
              <th key={year}>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(12)].map((_, monthIndex) => (
            <tr key={monthIndex}>
              <td>{new Date(2000, monthIndex).toLocaleString('default', { month: 'long' })}</td>
              {uniqueYears.map((year) => {
                const matchingData = Object.values(fiveYearsReturns).find(
                  (item) => item?.Start?.slice(-4) === year && new Date(item.Start).getMonth() === monthIndex
                );

                return (
                  <td
                    key={`${year}-${monthIndex}`}
                    style={{ backgroundColor: matchingData ? getColorForReturn(matchingData.Returns) : '#292929' }}
                  >
                    {matchingData ? matchingData.Returns.toFixed(4) : ''}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr>
            <td>Annual Return</td>
            {uniqueYears.map((year) => (
              <td key={`annual-${year}`} className="annual-return">
                {calculateAnnualSum(year).toFixed(4)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReturnsTable;
