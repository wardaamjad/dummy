// src/Home.js
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Typography } from '@mui/material';
const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Typography variant="h1" background="gradients.navGradient">
      <h1>Welcome to the Home Page</h1>
      </Typography>
    </div>
  );
};

export default Home;
