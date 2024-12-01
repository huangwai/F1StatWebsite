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

const images = [
  {
    url: "../Pictures/weridpic.png",
    title: "Drivers",
    link: `/drivers/${currentYear}`,
  },
  {
    url: "../assets/pixbyhuynh-483.jpg",
    title: "Teams",
    link: `/teams/${currentYear}`,
  },
  {
    url: "../assets/pixbyhuynh-483.jpg",
    title: "Results",
    link: `/results/${currentYear}`,
  },
  {
    url: "../assets/pixbyhuynh-483.jpg",
    title: "Schedule",
    link: `/schedule/${currentYear}`,
  },
  {
    url: "../assets/pixbyhuynh-483.jpg",
    title: "Data Analysis",
    link: `/analysis/${currentYear}`,
  },
];

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
    // <FadeInSection key={image}>
    <div>
      {" "}
      <Box
        // className='album'
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: "100vw",
          width: "auto",
          minHeight: "100vh",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Make sure the background covers the entire viewport
          opacity: 0.5,
        }}
      >
        {/* <img
        src={`../images/albumcovers/heroimg2.jpg?w=164&h=164&fit=crop&auto=format`}
        srcSet={`../images/albumcovers/heroimg2.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={"Hero Image"}
        height = 'auto'
        width = 'auto'
        margin = 'auto'
        loading="lazy"
      /> */}
        {/* {images.map((image, index) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: "100vw",
            border: "none",
          }}
          href={image.link}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundAttachment: "fixed", // Makes the background static
              backgroundPosition: "center", // Centers the image
            }}
          />

          <ImageBackdrop className="MuiImageBackdrop-root" />

          <Image loading="lazy">
            <Typography
              component="span"
              variant="subject1"
              color="inherit"
              outline="none"
              border="none"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                outline: "none",
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))} */}
      </Box>
      <Typography
        sx={{
          color: "white",
          position: "fixed",
          fontFamily: "Titillium Web",
          fontWeight: 500,
          bottom: "60vh",
          width: "100vw",
          textAlign: "center",
          fontSize: { xs: "30px", sm: "50px", lg: "70px" },
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
          fontFamily: "Titillium Web",
          fontWeight: 300,
          bottom: "50vh",
          width: "100vw",
          alignContent: "center",
          textAlign: "center",
          fontSize: { xs: "15px", sm: "20px", lg: "25px" },
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
          position: "fixed",
          fontFamily: "Titillium Web",
          fontWeight: 500,
          bottom: "40vh",
          width: "100vw",
          alignContent: "center",
          textAlign: "center",
          color: "white",
          // hover: "white",
          // bgcolor: " white",
          fontSize: { xs: "15px", sm: "20px", lg: "30px" },
        }}
        href={`/drivers/${currentYear}`}
        variant="text"
      >
        Learn More!
      </Button>
    </div>
  );
}
