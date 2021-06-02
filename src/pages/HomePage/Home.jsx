import React from 'react';
import WhatWeDoSection from '../../modules/HomeModules/WhatWeDoSection/WhatWeDoSection';
import HomeHeroSection from '../../modules/HomeModules/HeroSectionModules/HomeHeroSection';
import Footer from '../../component/common/footer/Footer';

const Home = () => (
  <div>
    <HomeHeroSection />
    <WhatWeDoSection />
    <Footer />
  </div>
);

export default Home;
