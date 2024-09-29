// src/Home.js
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const Home = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        background: theme.palette.gradients.defaultGradiants, // Apply NavBar linear gradient
      }}
    >
    <div>
      <ResponsiveAppBar />
      <Typography variant="h1" color="theme.palette.gradients.navGradient">
      <h1>Welcome to the Home Page</h1>
      </Typography>
    </div>
    </AppBar>
  );
};

export default Home;
