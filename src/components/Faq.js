import React, { useState, useEffect } from 'react';

function Faq() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch('data/faq.json')
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);

  return (
    <div>
      <h1>FAQ</h1>
      {faq.map((faqItem) => {
        return (
          <div key={faqItem.id}>
            <p>{faqItem.question}</p>
            <p>{faqItem.answer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
