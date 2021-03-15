import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to='/'>
        <img
          src='https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png'
          alt=''
        />
      </Link>
      <input placeholder='Search Star Wars' />
      <img
        src='https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg'
        alt=''
      />
    </>
  );
}

export default Header;
