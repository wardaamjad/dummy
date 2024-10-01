// src/Home.js
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ImageCarousel from '../components/ImageCarousel';
import Video from '../components/Video';
import HomeGames from '../components/HomeGames';
const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <ImageCarousel />
      <Video />
      <HomeGames />
    </div>
  );
};

export default Home;
