import React, { useState, useEffect } from 'react';
import './KeyFeatures.css';

function KeyFeatures() {
  const [keyFeatures, setKeyFeatures] = useState([]);

  useEffect(() => {
    fetch('data/key-features.json')
      .then((res) => res.json())
      .then((data) => setKeyFeatures(data));
  }, []);

  return (
    <section className='features'>
      <h1 className='features-header'>Key Features</h1>
      {keyFeatures.map((feature, idx) => {
        return (
          <div className={`feature${idx % 2 !== 0 ? ' row-reverse' : ''}`} key={feature.id}>
            <p className='feature-desc'>
              <span className='topic'>{feature.topic}</span>: {feature.description}
            </p>
            <img
              className='feature-img'
              src={`data/images/features/${feature.imgSrc}`}
              alt={feature.imgAlt}
            />
          </div>
        );
      })}
    </section>
  );
}

export default KeyFeatures;
