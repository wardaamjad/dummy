// src/Home.js
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ImageCarousel from '../components/ImageCarousel';
import Video from '../components/Video';
import HomeGames from '../components/HomeGames';
import GamingComponent from '../components/GamingComponent';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <ImageCarousel />
      <Video />
      <HomeGames />
      <GamingComponent />
      <Footer />
    </div>
  );
};

export default Home;
