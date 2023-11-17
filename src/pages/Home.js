import SearchBar from "../components/search";
// import useFetch from "../hooks/useFetch"

// reutrns the home page for the entire app. Also includes the search bar component
const Home = () => {

    async function loadNames() {
        const response = await fetch('https://flask-api-finlabs-b778fe863ba1.herokuapp.com/Stock/aapl');
        const names = await response.json();
      
        console.log(names); 
        // logs [{ name: 'Joker'}, { name: 'Batman' }]
      }
    async function loadTreasuries(){
      const response = await fetch('https://flask-api-finlabs-b778fe863ba1.herokuapp.com/treasuries')
      const data = await response.json()

      console.log(data)
    }
      // loadTreasuries();
      // loadNames();
   
    return( 
    <div>


        <h1>Home</h1>
        <h2>Test</h2>
        <SearchBar />
    </div>
    );
  };
  
  export default Home;
  