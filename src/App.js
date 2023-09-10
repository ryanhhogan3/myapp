import './App.css';
import Chart from "chart.js/auto";
import Historicalyields from './components/historicalyields';
import Allyields from './components/allyields';
import Footer from './components/footer';

import Yieldcurve from './components/yieldcurve';

function App() {

  
  
  return (
    <div className="Test">
      <header className="App-header">
        <h1>
          Yield Curve Data
        </h1>
        

        </header>
        <div className='Charts'>
       
  </div>
  <br />
  <div className='Chart-container'>
  <div className='Charts'>
    <Yieldcurve />
    <Historicalyields />
    <Allyields />

    <br />
    <br></br>
    <br></br>
    <br></br>
    <Footer />
    </div>
  </div>
    </div>
  );
}

export default App;
