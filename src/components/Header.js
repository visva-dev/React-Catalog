import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png'
          alt=''
        />
      </Link>
      <Link to='/about'>
        <h1>About</h1>
      </Link>
    </div>
  );
}

export default Header;
