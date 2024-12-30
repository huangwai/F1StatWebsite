import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getSchedule } from "../../APIs/ScheduleApi";
import { Link } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import FilterValues from "../../Components/Filter";
import { dataYears, sections } from "../../Data/Data";
import FilterSeason from "../../Components/FilterSeason";

const Teams = () => {
  const [race, setRace] = useState([]); //set array for drivers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //get Driver ID from URL path
  const Season = location.pathname.split("/")[2];
  //get Driver ID from URL path
  //const Season = location.pathname.split("/")[2];
  // console.log("param2", Season);
  const { param } = useParams();
  console.log("Schedule Param", param);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRace = async () => {
      try {
        const data = await getSchedule(param); // Replace with the desired season
        console.log("API Schedule REsponse:", data.MRData.RaceTable.Races);
        setRace(data.MRData.RaceTable.Races);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    //fetches all race input
    fetchRace();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ marginTop: 90, marginBottom: 90 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs>
            <FilterSeason data={dataYears.name} urlPath={"Schedule"} />
          </Grid2>
        </Grid2>
      </Box>
      <h2 style={{ color: "white", textAlign: "center" }}>
        {param} Formula 1 Schedule
      </h2>
      <ul>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "90vw" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ROUND</TableCell>
                <TableCell align="left">DATE</TableCell>
                <TableCell align="left">GRAND PRIX</TableCell>
                <TableCell align="left">CIRCUIT</TableCell>
                <TableCell align="left">COUNTRY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {race.map((races, index) => (
                // {rows.map((row) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{races.round}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    // onClick={() => navigate(`/drivers/info/${results}`)}
                  >
                    {races.date}
                    {/* <Link href={driverStanding.Driver.url}>
                      {driverStanding.Driver.givenName}{" "}
                      {driverStanding.Driver.familyName}
                    </Link> */}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Formula 1 {races.raceName} {param}
                    {/* <Link href={driverStanding.Driver.url}>
                      {driverStanding.Driver.givenName}{" "}
                      {driverStanding.Driver.familyName}
                    </Link> */}
                  </TableCell>
                  <TableCell align="left">
                    {races.Circuit.circuitName}
                  </TableCell>
                  <TableCell align="left">
                    {races.Circuit.Location.country}
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

export default Teams;
