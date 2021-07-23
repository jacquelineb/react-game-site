import React, { useState, useEffect } from 'react';

function KeyFeatures() {
  const [keyFeatures, setKeyFeatures] = useState([]);

  useEffect(() => {
    fetch('data/key-features.json')
      .then((res) => res.json())
      .then((data) => setKeyFeatures(data));
  }, []);

  return (
    <section>
      <h1>Key Features</h1>
      {keyFeatures.map((feature) => {
        return (
          <div>
            <p>
              <span>{feature.topic}: </span>
              {feature.description}
            </p>
            <img src={`data/images/features/${feature.imgSrc}`} alt={feature.imgAlt} />
          </div>
        );
      })}
    </section>
  );
}

export default KeyFeatures;
