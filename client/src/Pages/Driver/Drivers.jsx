import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDrivers, getDriverStandings } from "../../APIs/DriversApi";
import { Link } from "@mui/material";
import DriverInfo from "./DriverInfo";
import { useNavigate, useParams } from "react-router-dom";

const Drivers = () => {
  const [driverStandings, setDriverStandings] = useState([]); //set array for drivers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //get Driver ID from URL path
  //const Season = location.pathname.split("/")[2];
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
        setDriverStandings(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
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

  return (
    <div>
      <h2>{param} Formula 1 Driver Standings</h2>
      <ul>
        {/* {drivers.map((driver, index) => (
          <li key={index}>
            {driver.permanentNumber}: {driver.givenName} {driver.familyName}
          </li> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>POS</TableCell>
                <TableCell align="left">DRIVER</TableCell>
                <TableCell align="left">NATIONALITY</TableCell>
                <TableCell align="left">CAR</TableCell>
                <TableCell align="left">PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverStandings.map((driverStanding, index) => (
                // {rows.map((row) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{driverStanding.position}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() =>
                      navigate(
                        `/drivers/info/${driverStanding.Driver.driverId}`
                      )
                    }
                  >
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
