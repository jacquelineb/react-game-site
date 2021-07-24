import React, { useState, useEffect } from 'react';
import './Faq.css';

function Faq() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch('data/faq.json')
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);

  return (
    <section className='faq'>
      <h1>FAQ</h1>
      {faq.map((faqItem) => {
        return (
          <div className='faq-item' key={faqItem.id}>
            <p className='question'>{faqItem.question}</p>
            <p className='answer'>{faqItem.answer}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Faq;
