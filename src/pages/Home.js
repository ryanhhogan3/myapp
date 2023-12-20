import SearchBar from "../components/search";
import StockChart from "../components/stockpricechart";
import ReturnsTable from '../components/returnstable';
import "./Home.style.css"

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
        <div className="Index-charts">
  <StockChart stock={'SPY'} className="StockChart" />
  <StockChart stock={'QQQ'} className="StockChart" />
  <StockChart stock={'BTC-USD'} className="StockChart" />
  <StockChart stock={'VCIT'} className="StockChart" />
  <StockChart stock={'VB'} className="StockChart" />
  <StockChart stock={'ARKK'} className="StockChart" />
</div>
        <ReturnsTable stock={'SPY'} />   
        </div>
    </div>
    </div>
    );
  };
  
  export default Home;
  