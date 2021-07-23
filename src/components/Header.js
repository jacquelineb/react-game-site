import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
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
