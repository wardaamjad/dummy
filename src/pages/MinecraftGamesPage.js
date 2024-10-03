import React from "react";
import { Container, Grid } from "@mui/material";
import GameCard from "../components/GameCard"; // Import GameCard component
import AdvertisementSection from "../components/AdvertisementSection"; // Import AdvertisementSection component
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import icon from "../assets/minecraft.png";
import { useTheme } from "@mui/material/styles";
import image from "../assets/minecraftgamecard.png";
import bgimage from "../assets/minecraftbg.png";

const MinecraftGamesPage = () => {
  const theme = useTheme(); // Access the theme
  const bgImage = bgimage; // Background image path
  const iconImage = icon; // Icon image path
  const gameName = "Minecraft Games";
  const gameCards = [
    {
      icon: image,
      name: "Minecraft Slots Game 1",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      icon: image,
      name: "Minecraft Slots Game 2",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      icon: image,
      name: "Minecraft Slots Game 3",
      description: "Lorem ipsum dolor sit amet...",
    },
    // Add more games as needed
  ];
  return (
    <>
      <ResponsiveAppBar />
      <div
        style={{
          backgroundImage: `url(${bgImage})`, // Background image passed from the parent
          backgroundSize: "cover",
          padding: "1rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={iconImage}
            alt="Casino Icon"
            style={{ width: "7.70631rem" }} // Icon passed from parent
          />
          <h1 style={{ color: "white" }}>{gameName}</h1>{" "}
          {/* Game name from parent */}
          <Container maxWidth={"md"}>
            <div
              style={{
                padding: "2rem 0",
                backgroundColor: "#fff",
                borderRadius: "0.625rem",
                border: "1px solid",
              }}
            ></div>
          </Container>
        </div>
      </div>
      <Grid
        container
        spacing={3}
        sx={{
          marginTop: "0px !Important",
          padding: "6rem 3rem",
          background: theme.palette.gradients.minecraftBodyGradiant ,
        }}
      >
        {gameCards.map((game, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <GameCard
              icon={game.icon}
              name={game.name}
              description={game.description}
            />
          </Grid>
        ))}
   
        <AdvertisementSection />
      </Grid>

      {/* Advertisement section */}
      <Footer />
    </>
  );
};

export default MinecraftGamesPage;
