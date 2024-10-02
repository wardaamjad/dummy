import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material"; // Use icons from Material-UI
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "3rem 0",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description Section */}
          <Grid item xs={12} md={3}>
            <img
              src={logo} // Replace with your logo path
              alt="Play It Forward Logo"
              style={{
                width: "141px",
                marginBottom: "-2rem",
                marginTop: "-3rem",
              }}
            />
            <Typography variant="body2">Lorem Ipsum is simply dummy</Typography>
            <Typography variant="body2">text of the printing and</Typography>
            <Typography variant="body2">typesetting industry.</Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">+10123456789</Typography>
            <Typography variant="body2">
              Email:{" "}
              <Link
                href="mailto:info@playitforward.com"
                style={{ color: "white" }}
              >
                info@playitforward.com
              </Link>
            </Typography>
            <Typography variant="body2">
              Address: #718, dummy address Calgary AB
            </Typography>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2">
              <Link href="#" style={{ color: "white" }}>
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" style={{ color: "white" }}>
                Contact Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" style={{ color: "white" }}>
                Our Services
              </Link>
            </Typography>
          </Grid>

          {/* Learn Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Learn
            </Typography>
            <Typography variant="body2">
              <Link href="#" style={{ color: "white" }}>
                Who we are
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" style={{ color: "white" }}>
                FAQ
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" style={{ color: "white" }}>
                Terms
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" style={{ color: "white" }}>
                Blog
              </Link>
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Please follow us on our social channels.
            </Typography>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom Section */}
      <div
        style={{
          marginTop: "3rem",
          borderTop: "1px solid white",
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Typography variant="body2">
          © 2024 play it forward. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Design and Develop by Designo Graphy
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
