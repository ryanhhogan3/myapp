import SearchBar from "../components/search";
import StockChart from "../components/stockpricechart";

// reutrns the home page for the entire app. Also includes the search bar component
const Home = () => {
    return( 
    <div>
        <h1>Home</h1>
        <SearchBar />
        <br></br>
        <div className="Charts">

        <StockChart stock={'SPY'}  />
        </div>
    </div>
    );
  };
  
  export default Home;
  