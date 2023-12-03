import React from 'react';
import "./returnstable.style.css"

const ReturnsTable = ({ data }) => {
    const uniqueYears = [...new Set(Object.values(data).map(item => item.Start.slice(-4)))];

  const getColorForReturn = (value) => {
    if (value > 0) {
      return '#006400'; // Dark green for positive returns
    } else if (value < 0) {
      return '#8b0000'; // Dark red for negative returns
    } else {
      return '#292929'; // Default color for zero returns
    }
  };

  // Function to calculate the annual sum for each year
  const calculateAnnualSum = (year) => {
    return Object.values(data)
      .filter((item) => item.Start.slice(-4) === year)
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
                const matchingData = Object.values(data).find(
                  (item) => item.Start.slice(-4) === year && new Date(item.Start).getMonth() === monthIndex
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
          {/* Annual Return row */}
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
