import React from 'react';
import logo from '../assets/images/logo/golden_sun_logo.png';
import KeyFeatures from './KeyFeatures';

function Home() {
  return (
    <>
      <div className='game-logo'>
        <img src={logo} alt='game logo' />
      </div>
      <p>In a dark time, an epic adventure dawns...</p>
      <KeyFeatures />
    </>
  );
}

export default Home;
