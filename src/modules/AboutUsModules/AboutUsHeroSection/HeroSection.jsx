import React from 'react';
import './HeroSection.css';
import headerImage from '../../../assets/about-us/header-img.svg';
import content from './HeroSectionData.json';

const HeroSection = () => (
  <div className="container-fluid overlay header">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-md-6">
        <p className="header-title">About Us</p>
        <p className="header-content">{content.description}</p>
      </div>
      <div className="col-md-6 header-img">
        <div className="d-flex justify-content-right">
          <img src={headerImage} alt="About Us header" className="d-none d-sm-block header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
