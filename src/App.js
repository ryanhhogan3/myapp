import './App.css';
import Chart from "chart.js/auto";
import Historicalyeilds from './components/historicalyeilds';
import Allyeilds from './components/allyeilds';
import Footer from './components/footer';

import Yeildcurve from './components/yeildcurve';

function App() {

  
  
  return (
    <div className="Test">
      <header className="App-header">
        <h1>
          Yeild Curve Data
        </h1>
        
    <h2>Historical View of Yeilds</h2>
        </header>
        <div className='Charts'>
       
  </div>
  <br />
  <div className='Chart-container'>
  <div className='Charts'>
    <Yeildcurve />
    <Historicalyeilds />
    <Allyeilds />

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
