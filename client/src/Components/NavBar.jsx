import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const NavBar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically (if needed, in height of Box)
        typography: "body1",
        position: "fixed", // Sticks to the top
        top: 0,
        left: 0,
        width: "100%", // Spans the full screen width
        height: "60px", // Sets height for the navbar
        backgroundColor: "background.paper",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000, // Ensures it stays above other elementst
      }}
      //   onClick={preventDefault}
    >
      <div>
        <Link href="/" underline="hover" sx={{ mx: 2 }}>
          Home
        </Link>
        <Link href={`/drivers/${currentYear}`} underline="hover" sx={{ mx: 2 }}>
          Drivers
        </Link>
        <Link href="/teams" underline="hover" sx={{ mx: 2 }}>
          Teams
        </Link>
        <Link href="/results" underline="hover" sx={{ mx: 2 }}>
          Results
        </Link>
        <Link href="/schedule" underline="hover" sx={{ mx: 2 }}>
          Schedule
        </Link>
        <Link href="/analysis" underline="hover" sx={{ mx: 2 }}>
          Analysis
        </Link>
      </div>
    </Box>
  );
};

export default NavBar;
