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
const DriverInfo = () => {
  const [driverInfo, setDriverInfo] = useState([]); //set array for drivers
  const [driverResults, setDriverResults] = useState([]); //set array for drivers

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { param } = useParams();

  useEffect(() => {
    const fetchDriverInfo = async () => {
      try {
        setLoading(true);
        const [driver, result] = await Promise.all([
          getDriversInfo(param),
          getDriverResults(param),
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
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h3" gutterBottom>
          {" "}
          {driverInfo.givenName} {driverInfo.familyName}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {" "}
          {driverInfo.dateOfBirth} - {driverInfo.nationality}
        </Typography>
      </Box>
      {/* Show previous race */}
    </div>
  );
};

export default DriverInfo;
