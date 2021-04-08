import React from 'react';
import './WhatWeDoSection.css';
import items from './WhatWeDoSection.json';

const cards = items.data.map((item) => (
  <div className="col-md-3 mb-3" key={item.id}>
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <i className={item.icon} />
        </div>
        <p className="d-flex justify-content-center mt-3 content">{item.description}</p>
      </div>
    </div>
  </div>
));

const WhatWeDoSection = () => (
  <div className="container">
    <h1 className="text-center mt-4 title">What We Do?</h1>
    <div className="row mt-4">{cards}</div>
  </div>
);

export default WhatWeDoSection;
