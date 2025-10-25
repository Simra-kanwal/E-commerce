import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import FeatureProducts from './FeatureProducts';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home
