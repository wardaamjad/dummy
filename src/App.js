// src/App.js

import React from 'react';
import { Button, Typography, h1 } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoPlayer />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
