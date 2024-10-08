import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo.png"; // Import your video file
import profile from "../assets/Profile.png"; // Import your video file
import { useNavigate } from "react-router-dom";

const pages = [
  "Casino Games",
  "Sports Games",
  "Action Games",
  "Racing Games",
  "Minecraft Games",
  "About us",
  "Contact us",
  "FAQs",
  // "Donate",
  // "Leaderboard",
  // "User account",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const theme = useTheme(); // Access the theme
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activePage, setActivePage] = React.useState(""); // State for active page

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageClick = (page) => {
    setActivePage(page); // Update the active page
    if(page === "Casino Games"){
      navigate('/casino-games')
    }
    if(page === "Sports Games"){
      navigate('/sport-games')
    }
    if(page === "Action Games"){
      navigate('/action-games')
    }
    if(page === "Racing Games"){
      navigate('/racing-games')
    }
    if(page === "Minecraft Games"){
      navigate('/minecraft-games')
    }
    if(page === "About us"){
      navigate('/about-us')
    }
    if(page === "Contact us"){
      navigate('/contact-us')
    }
    if(page === "FAQs"){
      navigate('/faqs')
    }
    // if(page === "Leaderboard"){
    //   navigate('/leaderboard')
    // }
    handleCloseNavMenu(); // Close the menu after selection
  };

  // Get the background gradient based on the active page
  const getBackgroundColor = () => {
    switch (activePage) {
      case "Casino Games":
        return theme.palette.gradients.casinoNavGradiant;
      case "Sports Games":
        return theme.palette.gradients.sportsNavGradiant;
      case "Action Games":
        return theme.palette.gradients.actionNavGradiant;
      case "Racing Games":
        return theme.palette.gradients.racingNavGradiant;
      case "Minecraft Games":
        return theme.palette.gradients.minecraftNavGradiant;
      default:
        return theme.palette.gradients.defaultGradiants;
    }
  };

  return (
    <AppBar position="static" sx={{ background: getBackgroundColor() }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "10.875rem",
              height: "6.5625rem",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 2,
                  color: theme.palette.text.main,
                  display: "block",
                  border: "1px solid transparent", // Initial border state
                  transition: "0.3s", // Smooth transition for hover effect
                  position: "relative", // Required for inner shadow effect
                  "&:hover": {
                    border: `1px solid ${theme.palette.button.blue}`, // Neon border color
                    mixBlendMode: "screen",
                    background: theme.palette.button.black,
                  },
                }}
              >
                {page}
              </Button>
            ))}

            {/* Login and Signup buttons */}
            <Button
              startIcon={<img src={profile} alt="profile" />}
              sx={{
                ml: 5,
                borderRadius: "0.1875rem",
                background:theme.palette.button.black,
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                color: "white",
                "&:hover": {
                  border: `1px solid ${theme.palette.button.blue}`, // Neon border color
                  mixBlendMode: "screen",
                  background: theme.palette.button.black,
                },
              }}
            >
              Login
            </Button>

            <Button
              startIcon={<img src={profile} alt="profile" />}
              sx={{
                ml: 2,
                borderRadius: "0.1875rem",
                background: theme.palette.button.black,
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                color: "white",
                "&:hover": {
                  border: `1px solid ${theme.palette.button.blue}`, // Neon border color
                  mixBlendMode: "screen",
                  background: theme.palette.button.black,
                },
              }}
            >
              Signup
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
