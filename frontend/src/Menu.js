import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; // Import CSS for styling

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-item"><Link to="/map">World Map</Link></li>
        <li className="menu-item"><Link to="/currency">Currency Rates</Link></li>
        <li className="menu-item"><Link to="/login">Login</Link></li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
};

export default Menu;