import React from 'react';
import './WhatWeDoSection.css';
import items from './WhatWeDoSection.json';

const WhatWeDoSection = () => {
  return (
    <div className='container'>
      <h1 className='text-center mt-4 title'>What We Do?</h1>
      <div className='row mt-4'>
        {items.data.map((item, index) => (
          <div className='col-md-3 mb-3'>
            <div class="card">
              <div class="card-body">
                <div className="d-flex justify-content-center">
                  <i className={item.icon}></i>
                </div>
                <p className="d-flex justify-content-center mt-3 content">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeDoSection;