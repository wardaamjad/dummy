import React, { useEffect, useState } from 'react';
import { Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Select, MenuItem, Paper,Container } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import bgimage from '../assets/leaderboardbg.png'
// import axios from 'axios';
const Leaderboard = () => {
//     const [leaderboardData, setLeaderboardData] = useState([]);
//   const [country, setCountry] = useState('Country Champion');
    const bgImage = bgimage; // Background image path   
    const gameName = "Laederboard";
    const theme = useTheme();
    // Fetch data from backend
//   useEffect(() => {
//     axios.get('/api/leaderboard') // Replace with your actual backend endpoint
//       .then((response) => {
//         setLeaderboardData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching leaderboard data:", error);
//       });
//   }, []);
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
        sx={{
          marginTop: "0px !Important",
          padding: "6rem 3rem",
          background: theme.palette.gradients.FAQsBodyGradiant,
        }}
        >
        </Grid>
    <Footer />
    </>
  );
};
export default Leaderboard;
