import React from 'react';
import { Link } from 'react-router';
import './Header.css'

const Header = () => {
  return (
    <div>
      <h1>tis is header</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mobile">Mobile</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/Home"></Link>


    </nav>
      
    </div>
  );
};

export default Header;