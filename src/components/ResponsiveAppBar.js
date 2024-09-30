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

const pages = [
  "Casino Games",
  "Supports Games",
  "Action Games",
  "Racing Games",
  "Minecraft Games",
  "About us",
  "Contact us",
  "FAQs",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const theme = useTheme(); // Access the theme
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
    handleCloseNavMenu(); // Close the menu after selection
  };

  // Get the background gradient based on the active page
  const getBackgroundColor = () => {
    switch (activePage) {
      case "Casino Games":
        return theme.palette.gradients.casinoNavGradiant;
      case "Supports Games":
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
                  color: "white",
                  display: "block",
                  border: "1px solid transparent", // Initial border state
                  transition: "0.3s", // Smooth transition for hover effect
                  position: "relative", // Required for inner shadow effect
                  "&:hover": {
                    border: "1px solid #00E0FF", // Neon border color
                    mixBlendMode: "screen",
                    background: "#272A30",
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
                background: "#272A30",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                color: "white",
                "&:hover": {
                  border: "1px solid #00E0FF", // Neon border color
                  mixBlendMode: "screen",
                  background: "#272A30",
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
                background: "#272A30",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                color: "white",
                "&:hover": {
                  border: "1px solid #00E0FF", // Neon border color
                  mixBlendMode: "screen",
                  background: "#272A30",
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
