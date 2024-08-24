import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router, Route, Routes, and Link
import './App.css';
import Map from './Map';
import CurrencyRates from './CurrencyRates'; // Adjust the path if necessary
import Menu from './Menu'; // Import the Menu component
import Login from './Login';
/*
const App = () => {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ width: '80%', marginBottom: '20px' }}>
        <h1>World Map</h1>
        <div style={{ height: '400px', width: '100%' }}>
          <Map />
        </div>
      </div>
      <div style={{ width: '80%' }}>
        <h1>Currency Exchange Rates</h1>
        <div style={{ height: '500px', width: '100%' }}>
          <CurrencyRates />
        </div>
      </div>
    </div>
  );
};

export default App;
*/

const App = () => {
  return (
    <Router>
      <div className="App">
      <Menu /> {/* Render the menu at the top */}
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
            {/*<li><Link to="/map">World Map</Link></li>*/}
            {/*<li><Link to="/currency">Currency Exchange Rates</Link></li>*/}
          </ul>
        </nav>

        <Routes>
          <Route path="/map" element={
            <div style={{ width: '80%', margin: '20px auto' }}>
              <h1>World Map</h1>
              <div style={{ height: '3000px', width: '100%' }}>
                <Map />
              </div>
            </div>
          } />
          <Route path="/currency" element={
            <div style={{ width: '80%', margin: '20px auto' }}>
              <h1>Currency Exchange Rates</h1>
              <div style={{ height: '500px', width: '100%' }}>
                <CurrencyRates />
              </div>
            </div>
          } />
          <Route path="/" element={<div><h1>Welcome</h1><p>Select a page to view.</p></div>} /> {/* Default route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;