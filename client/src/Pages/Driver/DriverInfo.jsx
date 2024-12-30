import React from "react";
import { useState, useEffect } from "react";
import { getDriversInfo } from "../../APIs/DriversApi";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDriverResults } from "../../APIs/DriversApi";
import { Card, CardContent, CardMedia, Avatar } from "@mui/material";

// `https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers${season}2024Drivers/${param}`
const DriverInfo = () => {
  const [driverInfo, setDriverInfo] = useState([]); //set array for drivers
  const [driverResults, setDriverResults] = useState([]); //set array for drivers

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { drivername, year } = useParams();
  console.log("Driving Info Params: ", drivername, year);

  useEffect(() => {
    const fetchDriverInfo = async () => {
      try {
        setLoading(true);
        const [driver, result] = await Promise.all([
          getDriversInfo(drivername),
          getDriverResults(drivername),
        ]); // Replace with the desired season
        console.log("getDriverinfo:", driver.MRData.DriverTable.Drivers[0]);
        console.log("getDriverResults:", result.MRData);

        setDriverInfo(driver.MRData.DriverTable.Drivers[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    //fetches all drivers
    fetchDriverInfo();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card sx={{ width: 500, height: "auto" }}>
          <CardMedia
            component="img"
            height="auto"
            // width="50vw"
            image={`https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/${year}Drivers/${driverInfo.familyName}`}
            // size="cover"
            alt={driverInfo.givenName}
          />
          <CardContent>
            {/* <Avatar
            src={`https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/${driverInfo.familyName}`}
            sx={{ width: 80, height: 80, margin: "auto", marginTop: -40 }}
          /> */}
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {driverInfo.givenName} {driverInfo.familyName}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {driverInfo.dateOfBirth} - {driverInfo.nationality}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* <Box sx={{ width: "100%", maxWidth: 500, color: "white" }}> */}
      {/* <img
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        /> */}

      {/* <Typography variant="h3" gutterBottom>
          {" "}
          {driverInfo.givenName} {driverInfo.familyName}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {" "}
          {driverInfo.dateOfBirth} - {driverInfo.nationality}
        </Typography>
      </Box> */}
      {/* Show previous race */}
      {/* <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Card> */}
    </div>
  );
};

export default DriverInfo;
