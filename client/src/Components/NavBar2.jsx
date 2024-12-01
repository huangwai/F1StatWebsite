import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ScrollToHide from "./ScrollToHide";
import AnimationError from "../Pages/Error/AnimationError";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const pages = ["Drivers", "Teams", "Results", "Schedule", "Analysis"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const currentYear = new Date().getFullYear(); //get current year

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <ScrollToHide threshold={0}>
        <AppBar
          sx={{
            bgcolor: "transparent",
            mx: "auto",
            whiteSpace: "normal",
            // bgcolor: "rgb(212,212,212, .2)",
          }}
          position="fixed"
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ mx: "auto" }} disableGutters>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Titillium Web",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  fontSize: { md: "20px", lg: "30px" },
                  textDecoration: "none",
                }}
              >
                Apex Insights
              </Typography>

              <Box
                sx={{
                  bgcolor: "none",
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  //   bgcolor: "red",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                {/* MENU WHEN MINIMAL */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                    // textAlign: "Left",
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Button
                        href={`/${page}/${currentYear}`}
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          textAlign: "center",
                          my: 2,
                          color: "black",
                          display: "block",
                          fontSize: "15px",
                          fontFamily: "Titillium Web",
                          fontWeight: 500,
                          fontWeight: "bold",
                          paddingInlineStart: 2,
                          minWidth: "100vw",
                          textAlign: "Left",

                          bgcolor: "transparent",
                        }}
                      >
                        {page}
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "medium", color: "black" }}
                        />
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Titillium Web",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  fontSize: { xs: "20px", sm: "25px" },
                  textDecoration: "none",

                  pl: 2,
                }}
              >
                Apex Insights
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    href={`/${page}/${currentYear}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: { sm: "10px", md: "15px", lg: "18px" },
                      fontWeight: "bold",
                      fontFamily: "Titillium Web",
                      fontWeight: 500,
                      paddingInlineStart: 2,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              {/* <AnimationError /> */}
            </Toolbar>
          </Container>
        </AppBar>
      </ScrollToHide>
    </ThemeProvider>
  );
}
