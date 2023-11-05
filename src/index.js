import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Rates from './pages/Rates';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import NoPage from './pages/NoPage';
import SearchResult from './pages/SearchResult';



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navbar />} >
            <Route index element={<Home />} />
        <Route path='/rates' element={<Rates />} />
        <Route path='/searchResult' element={<SearchResult/>} />
        <Route path='*' element={<NoPage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
