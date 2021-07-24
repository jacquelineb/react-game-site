import React from 'react';
import KeyFeatures from './KeyFeatures';
import './Home.css';
import gameart from '../assets/images/gameart.jpg';

function Home() {
  return (
    <>
      <div className='intro'>
        <img className='game-art' src={gameart} alt='golden sun game art' />
        <p className='game-quote'>In a dark time, an epic adventure dawns...</p>
      </div>
      <KeyFeatures />
    </>
  );
}

export default Home;
