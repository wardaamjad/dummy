import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Box, Container } from '@mui/material';
import bgimage from "../assets/aboutusbg.png";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useTheme } from "@mui/material/styles";
import Footer from '../components/Footer';
import cardImg from '../assets/aboutus.png'
const AboutUs = () => {
    const bgImage = bgimage; // Background image path
    const gameName = "About Us";
    const theme = useTheme(); // Access the theme

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
            <Box
                sx={{
                    background: theme.palette.gradients.aboutusBodyGradiant, // Set the background to a purple shade
                    minHeight: '100vh',
                    padding: '50px',
                    color: '#fff',
                }}
            >
                <Grid container spacing={6} justifyContent="center">
                    {/* What is Play It Forward Section */}
                    <Grid item xs={12} md={10}>
                        <Typography variant="h3" align="center" gutterBottom>
                            What is Play It Forward
                        </Typography>
                        <Typography variant="body1" align="center">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                            has been the industry’s standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>

                    {/* Mission and Donate Section */}
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={5}>
                            <Box sx={{ marginTop: "100px" }}>
                                <Typography variant="h4" gutterBottom>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                                    has been the industry’s standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box>
                                <img
                                    src={cardImg}
                                    alt="Donate"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Box>
                        </Grid>

                        {/* Second Row */}
                        <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
                            <Box>
                                <img
                                    src={cardImg}
                                    alt="Donate"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
                            <Box sx={{ marginTop: "100px", marginLeft:"40px" }}>

                                <Typography variant="h4" gutterBottom>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                                    has been the industry’s standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default AboutUs;
