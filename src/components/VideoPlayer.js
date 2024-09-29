// src/VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoFile from '../assets/PlayItForward.mp4'; // Import your video file
 // Import your video file

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;

    // Delay the video autoplay by 3 seconds
    const delay = setTimeout(() => {
      if (video) {
        video.muted = true; // Mute the video for autoplay to work
        video.play().catch((err) => {
          console.error('Video autoplay failed:', err);
        });
      }
    }, 3000); // 3000 ms = 3 seconds delay

    // When the video ends, navigate to home page
    if (video) {
      video.onended = () => {
        navigate('/home');
      };
    }

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, [navigate]);

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={videoFile}  // Use the imported video
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        controls={false}  // Hide video controls
      ></video>
    </div>
  );
};

export default VideoPlayer;
