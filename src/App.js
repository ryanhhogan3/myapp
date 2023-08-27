import './App.css';
import Chart from "chart.js/auto";
import Historicalyeilds from './components/historicalyeilds';
import Allyeilds from './components/allyeilds';

import Yeildcurve from './components/yeildcurve';

function App() {

  
  
  return (
    <div className="Test">
      <header className="App-header">
        <h1>
          Yeild Curve Data
        </h1>
        
        </header>
        <div className='Charts'>
        <Yeildcurve />
  </div>
  <br />
  <div className='Charts'>
    <h2>Historical View of Yeilds</h2>
    <Historicalyeilds />
    <Allyeilds />
  </div>
    </div>
  );
}

export default App;
