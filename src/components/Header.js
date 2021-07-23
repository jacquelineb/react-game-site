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

        <div className='social-links'>
          <a href='#'>
            <img className='social-icon' src='images/twitter-icon.png' />
          </a>
          <a href='#'>
            <img className='social-icon' src='images/youtube-icon.png' />
          </a>
          <a href='#'>
            <img className='social-icon' src='images/facebook-icon.png' />
          </a>
          <a href='#'>
            <img className='social-icon' src='images/reddit-icon.png' />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
