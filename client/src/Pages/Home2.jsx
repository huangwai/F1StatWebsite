import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Background from "../Pictures/pixbyhuynh-483.jpg";
import { Button } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import FadeInSection from '../components/FadeInSection';
// import Hero from './albums/Home';
const currentYear = new Date().getFullYear();

// const images = [
//   {
//     url: "../Pictures/weridpic.png",
//     title: "Drivers",
//     link: `/drivers/${currentYear}`,
//   },
//   {
//     url: "../assets/pixbyhuynh-483.jpg",
//     title: "Teams",
//     link: `/teams/${currentYear}`,
//   },
//   {
//     url: "../assets/pixbyhuynh-483.jpg",
//     title: "Results",
//     link: `/results/${currentYear}`,
//   },
//   {
//     url: "../assets/pixbyhuynh-483.jpg",
//     title: "Schedule",
//     link: `/schedule/${currentYear}`,
//   },
//   {
//     url: "../assets/pixbyhuynh-483.jpg",
//     title: "Data Analysis",
//     link: `/analysis/${currentYear}`,
//   },
// ];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 200,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    // '& .MuiTypography-root': {
    //   border: '4px solid currentColor',
    // },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Home2() {
  return (
    <div>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: 2, // Spacing between items
          // flexWrap: "wrap",
          minWidth: "100vw",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      ></Box>
      <Typography
        sx={{
          color: "white",
          position: "fixed",
          margin: "auto",
          px: "1vw",
          fontFamily: "Titillium Web",
          fontWeight: 500,
          bottom: "60vh",
          width: "100vw",
          textAlign: "center",
          fontSize: { xs: "30px", sm: "50px", lg: "70px" },
          display: "flex", // Enable flexbox for content alignment
          alignItems: "center", // Center content vertically
          justifyContent: "center", // Center content horizontally
        }}
        variant="h3"
        gutterBottom
      >
        {" "}
        The Pinnacle of Motorsports Racing
      </Typography>
      <Typography
        sx={{
          color: "white",
          position: "fixed",
          px: "10vw",
          fontFamily: "Titillium Web",
          fontWeight: 300,
          bottom: "51vh",
          width: "100vw",
          alignContent: "center",
          textAlign: "center",
          color: "white",
          fontSize: { xs: "15px", sm: "20px", lg: "25px" },
          display: "flex", // Enable flexbox for content alignment
          alignItems: "center", // Center content vertically
          justifyContent: "center", // Center content horizontally
        }}
        variant="h3"
        gutterBottom
      >
        {" "}
        Your Ultimate Formula 1 Data Hub Discover driver stats, team insights,
        schedules, results, and head-to-head comparisons—all in one place. Fuel
        your passion for F1 with data that drives the action!
      </Typography>
      <Button
        sx={{
          color: "white",
          margin: "auto",
          fontFamily: "Titillium Web",
          fontWeight: 500,
          bottom: "45vh",
          width: "30%",
          alignContent: "center",
          textAlign: "center",
          fontSize: { xs: "15px", sm: "20px", lg: "30px" },
          display: "flex", // Enable flexbox for content alignment
          alignItems: "center", // Center content vertically
          justifyContent: "center", // Center content horizontally
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent background
          border: "1px solid white", // Border remains fully opaque
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Slightly less transparent on hover
          },
        }}
        href={`/${currentYear}/drivers`}
        variant="outlined"
      >
        Learn More
      </Button>
    </div>
  );
}
