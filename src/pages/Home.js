import SearchBar from "../components/search";
import StockChart from "../components/stockpricechart";
import ReturnsTable from '../components/returnstable';

import jsonData from "./test.json"

console.log(jsonData)

// reutrns the home page for the entire app. Also includes the search bar component
const Home = () => {
    return( 
    <div>
        <div className="homepage">
        <h1>Home</h1>
        <SearchBar />
        <br></br>
        <div className="Charts">

        <StockChart stock={'SPY'}  />
        <ReturnsTable data={jsonData} />   
        </div>
    </div>
    </div>
    );
  };
  
  export default Home;
  