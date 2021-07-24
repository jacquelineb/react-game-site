import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about'>
      <h2>About</h2>
      <p className='dev-description'>
        Camelot Software Planning is a Japanese video game developer founded in 1990 as a studio
        within SEGA. In 2001, Camelot went on to form a partnership with Nintendo. They are
        known for for creating games such as <span className='title'>Mario Tennis</span>,{' '}
        <span className='title'>Mario Golf</span>, and the{' '}
        <span className='title'>Shining</span> series.
      </p>
      <h2>Dev Blog</h2>
    </section>
  );
}

export default About;
