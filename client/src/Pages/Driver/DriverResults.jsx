import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDriverSeasonResults } from "../../APIs/ResultsApi";
import { Grid2, Link, Typography } from "@mui/material";
import DriverInfo from "./DriverInfo";
import { useNavigate, useParams } from "react-router-dom";
import FilterValues from "../../Components/Filter";
import Background from "../../Pictures/pixbyhuynh-483.jpg";
import Box from "@mui/material/Box";
import { dataYears, sections } from "../../Data/Data";
import FilterSeason from "../../Components/FilterSeason";

const DriverResults = () => {
  const [driverResults, setDriverResults] = useState([]); //set array for drivers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [drivers, setDrivers] = useState([]);

  const [name, setName] = useState([]);

  //get Driver ID from URL path
  //const Season = location.pathname.split("/")[2];
  // console.log("param2", Season);
  const {} = useParams();
  const { driverid, year } = useParams();
  console.log("Driver Param driverId", driverid);
  console.log("Driver Param Year", year);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDriverResults = async () => {
      try {
        const data = await getDriverSeasonResults(year, driverid); // Replace with the desired season
        console.log("Driver Result Responses:", data.MRData.RaceTable.Races);
        const driverAPI = data.MRData.RaceTable.Races;
        setDriverResults(driverAPI);
        // console.log("data is: ", driverAPI);
        console.log("data is: ", driverAPI[0].Results);

        //set driver list
        // setDrivers(
        //   driverAPI.map((driver) => ({
        //     id: driver.Driver.driverId,
        //     name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
        //   }))
        // );

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDriverResults();
  }, []);
  //fetches the specific driver result response
  // const driverName = driverResults[0].Results[0].Driver.familyName;
  // console.log(driveName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      style={{
        marginTop: 90,
        marginBottom: 90,
        fontFamily: "Titillium Web",
        color: "inherit",
      }}
    >
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs>
            <FilterSeason
              data={dataYears.name}
              urlPath={`drivers/result/${driverid}`}
            />
          </Grid2>
          <Grid2 item xs>
            <FilterValues data={sections} urlPath={`${year}`} />
          </Grid2>
          <Grid2 item xs>
            <FilterValues data={drivers} urlPath={`${year}/result`} />
          </Grid2>
     
        </Grid2>
      </Box> */}

      <h1
        style={{
          color: "white",
          textAlign: "left",
          backgroundColor: "inherit",
        }}
      >
        {year} Formula 1 Driver Standings{" "}
        {driverResults[0].Results[0].Driver.familyName}
      </h1>
      <ul>
        {/* {drivers.map((driver, index) => (
          <li key={index}>
            {driver.permanentNumber}: {driver.givenName} {driver.familyName}
          </li> */}
        <TableContainer
          component={Paper}
          // sx={{ backgroundColor: rgba(128, 128, 128, 0.6) }}
        >
          <Table
            sx={{ minWidth: "90vw", backgroundColor: "rgb(128, 128, 128, .1)" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{ height: " 7vh" }}>
                <TableCell>GRAND PRIX</TableCell>
                {/* <TableCell align="left">GRAND PRIX</TableCell> */}
                <TableCell align="left">DATE</TableCell>
                <TableCell align="left">CAR</TableCell>
                <TableCell align="left">RACE POSITION</TableCell>
                <TableCell align="left">PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverResults.map((results, index) => (
                // {rows.map((row) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    height: "2vh",
                  }}
                >
                  <TableCell
                    align="left"
                    sx={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() =>
                      navigate(
                        `/drivers/info/${param}/${driverStanding.Driver.driverId}`
                      )
                    }
                  >
                    {results.raceName}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ cursor: "pointer" }}
                  >
                    {results.date}
                  </TableCell>
                  <TableCell align="left">
                    {results.Results[0].Constructor.name}
                  </TableCell>
                  <TableCell align="left">
                    {results.Results[0].position}
                  </TableCell>
                  <TableCell align="left">
                    {results.Results[0].points}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ul>
    </div>
  );
};

export default DriverResults;
