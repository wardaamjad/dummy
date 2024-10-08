// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import Home from './pages/Home';
import CasinoGamesPage from './pages/CasinoGamesPage';
import ActionGamesPage from './pages/ActionGamesPage';
import RacingGamesPage from './pages/RacingGamesPage';
import MinecraftGamesPage from './pages/MinecraftGamesPage';
import SportGamesPage from './pages/SportGamesPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoPlayer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/casino-games" element={<CasinoGamesPage />} />
        <Route path="/action-games" element={<ActionGamesPage />} />
        <Route path="/racing-games" element={<RacingGamesPage />} />
        <Route path="/minecraft-games" element={<MinecraftGamesPage />} />
        <Route path="/sport-games" element={<SportGamesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
    
  );
}

export default App;
