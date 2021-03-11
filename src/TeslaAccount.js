import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './TeslaAccount.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const logoutofApp = () => {};
  return (
    <div className='teslaAccount'>
      <div className='teslaAccount__header'>
        <div className='teslaAccount__logo'>
          <Link>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt='logo'
            />
          </Link>
        </div>
        <div className='teslaAccount__links'>
          <Link to='/teslaaccount'>Model S</Link>
          <Link to='/teslaaccount'>Model 3</Link>
          <Link to='/teslaaccount'>Model X</Link>
          <Link to='/teslaaccount'>Model Y</Link>
          <Link to='/teslaaccount'>Solar Roof</Link>
          <Link to='/teslaaccount'>Solar Panels</Link>
          <Link to='/teslaaccount'>Shop</Link>
          <Link to='/teslaaccount'>Tesla Account</Link>
          <Link onClick={logoutofApp}>Log out</Link>
          <div
            className='teslaAccount__menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div className='teslaAccount__info'>
        <div className='teslaAccount__person'>
          <h4>{user?.displayName + "'s"}</h4>
        </div>
        <div className='teslaAccount__infoRight'>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutofApp}>Sign out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815' model='model s' testDrive/>
        <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815' model='model x'/>
      </div>
    </div>
  );
}

export default TeslaAccount;
