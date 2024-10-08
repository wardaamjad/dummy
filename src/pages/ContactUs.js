import React from 'react';
import { Grid, Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';  // Assuming some placeholder icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import bgimage from '../assets/contactusbg.png';
    
const ContactUs = () => {
    const bgImage = bgimage; // Background image path
    const gameName = "Contact Us";
    const theme = useTheme();
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
          background: theme.palette.gradients.contactusBodyGradiant,
        }}
      >
    <Paper
      elevation={0}
      sx={{
        backgroundColor: theme.palette.text.main,
        padding: '10px',
        borderRadius: '8px',
        maxWidth: '1000px',
        margin: '0 auto',
        overflow: 'hidden'
      }}
    >
      <Grid container >
        {/* Left Section - Contact Information */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: { xs: '100%', sm: '80%', md: '60%', lg: '100%' },  // Responsive width

               width: '280px',  // Set the form width
        margin: '0 0', 
              color: theme.palette.text.main,
              height: '100%',
              padding: '0px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              
            }}
          >
            <Box sx={{ width: '100%', height: '200px', marginBottom: '10px',backgroundColor: '#1a1a1a', padding: "15px", borderRadius:"10px" }}>
              <Typography variant="body1" gutterBottom>
                <PhoneIcon sx={{ mr: 1 }} /> +1012 3456 789
              </Typography>
              <Typography variant="body1" gutterBottom>
                <EmailIcon sx={{ mr: 1 }} /> demo@gmail.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                <MapIcon sx={{ mr: 1 }} /> 132 Dartmouth Street Boston,
                Massachusetts 02156 United States
              </Typography>
            </Box>
            <Box sx={{ width: '310px', height: '230px', backgroundColor: '#1a1a1a', display: 'flex',             // Flexbox to center inner content
        justifyContent: 'center',
        alignItems: 'center', borderRadius:"10px" }}>
              {/* This would be where the map goes */}
              <img
                src="https://via.placeholder.com/250x150?text=Map"
                alt="Map Placeholder"
                style={{borderRadius:'10px', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              padding: '13px',
              backgroundColor: theme.palette.text.main,
              height: '100%',
              boxSizing: 'border-box',
              width: { xs: '100%', sm: '80%', md: '60%', lg: '100%' },  // Responsive width
              maxWidth: '645px',  // Set the form width
              marginLeft: '5px',   // Optional: set a max width
            }}
          >
            <Typography variant="h5" gutterBottom sx={{
              color: theme.palette.form.lightgrey,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
              Contact Information
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{
              color: theme.palette.form.lightgrey,
              textAlign: 'center'
            }}>
              Say something to start a live chat!
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="standard-disabled"
                  label="First Name"
                  variant="standard"
                  sx={{ marginTop: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="standard"
                  sx={{ marginTop: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="standard"
                  sx={{ marginTop: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="standard"
                  sx={{ marginTop: '10px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  defaultValue="Write your message.."
                  variant="standard"
                  multiline
                  sx={{ marginTop: '10px' }}
                //   rows={4}
                />
              </Grid>
              <Grid item xs={12}>
              <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',  // Align button to the right
                        marginTop: '20px',
                      }}
                    >
                <Button
                  variant="contained"
                  size="large"
                //   fullWidth
                  sx={{
                    backgroundColor: '#0a1929',
                    color: '#fff',
                    // padding: '10px'
                  }}
                >
                  Send Message
                </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
    <Footer />
    </>
  );
};

export default ContactUs;
