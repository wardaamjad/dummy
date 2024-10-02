import React from 'react';
import image1 from "../assets/Rectangle237.png";

function GamingComponent() {
  return (
    <div
      style={{
        height: "146vh",
        width: "100%",
        backgroundImage: `url(${image1})`, // Set background image correctly
        backgroundSize: "cover",           // Ensure the image covers the entire div
        backgroundPosition: "center",      // Center the image
      }}
    ></div>
  );
}

export default GamingComponent;
