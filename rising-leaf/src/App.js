import React from 'react';
import './App.css';
import Map from './Map';
import CurrencyRates from './CurrencyRates'; // Adjust the path if necessary

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Map Container */}
      <div style={{ width: '80%', marginBottom: '20px' }}>
        <h1>World Map</h1>
        <div style={{ height: '400px', width: '100%' }}>
          {/* Map Component */}
          <Map />
        </div>
      </div>

      {/* Currency Rates Container */}
      <div style={{ width: '80%' }}>
        <h1>Currency Exchange Rates</h1>
        <div style={{ height: '500px', width: '100%' }}>
          {/* Currency Rates Component */}
          <CurrencyRates />
        </div>
      </div>
    </div>
  );
};

export default App;