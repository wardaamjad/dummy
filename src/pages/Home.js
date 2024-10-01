// src/Home.js
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ImageCarousel from '../components/ImageCarousel';
const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <ImageCarousel />
    </div>
  );
};

export default Home;
