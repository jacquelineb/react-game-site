import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className='site-links'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/faq'>
            FAQ
          </Link>
          <Link className='nav-link' to='/about'>
            Our Team
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
