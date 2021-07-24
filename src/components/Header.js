import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo/golden_sun_logo.png';

function Header() {
  return (
    <header id='header'>
      <div className='game-logo'>
        <img src={logo} alt='game logo' />
      </div>
      <nav className='nav'>
        <NavLink exact to='/' className='nav-link' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/faq' className='nav-link' activeClassName='active'>
          FAQ
        </NavLink>
        <NavLink to='/about' className='nav-link' activeClassName='active'>
          Developers
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
