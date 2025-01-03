import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDrivers, getDriverStandings } from "../../APIs/DriversApi";
import { Grid2, Link, Typography } from "@mui/material";
import DriverInfo from "./DriverInfo";
import { useNavigate, useParams } from "react-router-dom";
import FilterValues from "../../Components/Filter";
import Box from "@mui/material/Box";
import { dataYears, sections } from "../../Data/Data";
import FilterSeason from "../../Components/FilterSeason";

const Drivers = () => {
  const [driverRecord, setDriverRecord] = useState([]); //set array for drivers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("dataYear: ", dataYears.name);
  console.log("sections: ", sections);

  const [drivers, setDrivers] = useState([]);

  //get Driver ID from URL path
  const Season = location.pathname.split("/")[2];
  // console.log("param2", Season);
  const { param } = useParams();
  console.log("Driver Param", param);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDriverStandings = async () => {
      try {
        const data = await getDriverStandings(param); // Replace with the desired season
        // console.log(
        //   "API REsponse:",
        //   data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        // );
        const driverAPI =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setDriverRecord(driverAPI);
        console.log("data is: ", driverAPI[0].Driver.driverId);

        //set driver list
        setDrivers(
          driverAPI.map((driver) => ({
            id: driver.Driver.driverId,
            name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
          }))
        );
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    //fetches all drivers
    fetchDriverStandings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("drivers filter value being sent", drivers);

  return (
    <div
      style={{
        marginTop: 90,
        marginBottom: 90,
        fontFamily: "Titillium Web",
        color: "inherit",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs>
            <FilterSeason
              data={dataYears.name}
              urlPath={`Drivers`}
              label={"Season"}
            />
          </Grid2>
          <Grid2 item xs>
            <FilterValues
              data={sections}
              urlPath={`${param}`}
              label={"Section"}
            />
          </Grid2>
          <Grid2 item xs>
            <FilterValues
              data={drivers}
              urlPath={`${param}/result`}
              label={"Driver"}
            />
          </Grid2>
        </Grid2>
      </Box>
      {/* <FilterValues data={dataYears.category} urlPath={"Drivers"} />
      <FilterValues data={dataYears.category} urlPath={"Teams"} /> */}
      {/* <FilterSelection data={data} /> */}
      {/* <Typography sc={{ textAlign: "left" }}>
        {param} Formula 1 Driving Standings
      </Typography> */}
      <h1
        style={{
          color: "white",
          textAlign: "left",
          backgroundColor: "inherit",
        }}
      >
        {param} Formula 1 Driver Standings
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
                <TableCell>POS</TableCell>
                <TableCell align="left">DRIVER</TableCell>
                <TableCell align="left">NATIONALITY</TableCell>
                <TableCell align="left">CAR</TableCell>
                <TableCell align="left">PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverRecord.map((driverStanding, index) => (
                // {rows.map((row) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    height: "1vh",
                    // width: "10vw",
                  }}
                >
                  <TableCell align="left">{driverStanding.position}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() =>
                      navigate(
                        `/${param}/drivers/info/${driverStanding.Driver.driverId}`
                      )
                    }
                  >
                    {/* <img
                      src={`https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/${param}Drivers/${driverStanding.Driver.familyName}`}
                      style={{ width: "20%", height: "auto", px: "10vw" }}
                    /> */}
                    {driverStanding.Driver.givenName}{" "}
                    {driverStanding.Driver.familyName}
                    {/* <Link href={driverStanding.Driver.url}>
                      {driverStanding.Driver.givenName}{" "}
                      {driverStanding.Driver.familyName}
                    </Link> */}
                  </TableCell>
                  <TableCell align="left">
                    {driverStanding.Driver.nationality}
                  </TableCell>
                  <TableCell align="left">
                    {driverStanding.Constructors[0].name}
                  </TableCell>
                  <TableCell align="left">{driverStanding.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ul>
    </div>
  );
};

export default Drivers;
