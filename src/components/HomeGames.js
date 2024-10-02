import React from "react";
import CardComponent from "./Card";
import { useTheme } from '@mui/material/styles';

const HomeGames = () => {
  const theme = useTheme(); 
  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push(<CardComponent key={i} />);
    }
    return cards;
  };

  return (
    <div
      style={{
        background: theme.palette.gradients.defaultGradiants,
        padding: "40px 80px",
        marginTop: "-22px",
      }}
    >
      <div>
        <h2>Recommended</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
            gap: "20px", // spacing between cards
          }}
        >
          {renderCards()}
        </div>
      </div>
      <div>
        <h2>Featured</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
            gap: "20px", // spacing between cards
          }}
        >
          {renderCards()}
        </div>
      </div>
      <div>
        <h2>Trending now</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
            gap: "20px", // spacing between cards
          }}
        >
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default HomeGames;
