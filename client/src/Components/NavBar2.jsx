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
            bgcolor: "#FF1E00",
            mx: "auto",
            whiteSpace: "normal",
          }}
          position="fixed"
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ bgcolor: "#FF1E00", mx: "auto" }} disableGutters>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  fontSize: "30px",
                  textDecoration: "none",
                }}
              >
                F1StatWebsite
              </Typography>

              <Box
                sx={{
                  bgcolor: "#FF1E00",
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
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
                          paddingInlineStart: 2,
                        }}
                      >
                        {page}
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
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  fontSize: "18px",
                  textDecoration: "none",

                  pl: 2,
                }}
              >
                F1StatWebsite
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
                      fontSize: "15px",
                      paddingInlineStart: 2,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <AnimationError />
            </Toolbar>
          </Container>
        </AppBar>
      </ScrollToHide>
    </ThemeProvider>
  );
}
