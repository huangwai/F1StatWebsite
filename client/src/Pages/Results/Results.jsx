import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getRoundResults } from "../../APIs/ResultsApi";
import { useNavigate, useParams } from "react-router-dom";
import FilterSeason from "../../Components/FilterSeason";
import FilterValues from "../../Components/Filter";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";
import { dataYears, sections, raceResultSections } from "../../Data/Data";
import { getSchedule } from "../../APIs/ScheduleApi";
import FilterRound from "../../Components/FilterRaceRound";
// import Typography from "@mui/material";
// import Paper from "@mui/material";
const Teams = () => {
  const [result, setResult] = useState([]); //set array for drivers
  const [result2, setResults2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [race, setRace] = useState([]); //set array for drivers

  const [raceAPI, setRaceAPI] = useState([]); //set array for drivers

  //get Driver ID from URL path
  //const Season = location.pathname.split("/")[2];
  // console.log("param2", Season);
  const { param, round } = useParams();
  console.log("Result Round", round);
  console.log("Result Year", param);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const data = await getRoundResults(param, round); // Replace with the desired season
        console.log("API RESULT REsponse:", data.MRData.RaceTable.Races[0]);
        setResult(data.MRData.RaceTable.Races[0].Results);
        setRace(data.MRData.RaceTable.Races[0].raceName);

        const data2 = await getSchedule(param);
        const racebySznAPI = data2.MRData.RaceTable.Races;
        console.log("data2: ", data2);
        // console.log("Race Name: ", race);

        setRaceAPI(
          racebySznAPI.map((team) => ({
            id: team.round,
            name: team.raceName,
          }))
        );
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    //fetches all race input
    fetchResult();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ marginTop: 90, marginBottom: 90 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs>
            <FilterSeason
              data={dataYears.name}
              urlPath={`results/${round}`}
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
            <FilterRound
              data={raceAPI}
              urlPath={"results"}
              year={param}
              label={"Race"}
            />
          </Grid2>
          {/* <Grid2 item xs>
            <FilterValues data={teamsAPI} urlPath={`${param}/teams/result`} />
          </Grid2> */}
        </Grid2>
      </Box>
      {/* <Typography sx={{ fontSize: "1px" }}>
        {param} Formula 1 {race} - Race Results
      </Typography> */}
      <h2 style={{ color: "white", textAlign: "center" }}>
        {param} Formula 1 {race} - Race Results
      </h2>
      <Box>
        {/* <Grid2 container spacing={2}>
          <Grid2 item xs={6}>
            <Paper
              elevation={3}
              sx={{ padding: 2, height: "50%", backgroundColor: "inherit" }}
            >
              <FilterRound
                data={raceResultSections}
                urlPath={`${round}`}
                year={param}
                label={"Race"}
              />
            </Paper>
          </Grid2> */}

        {/* Second Column */}
        {/* <Grid2 item xs={6}>
            <Paper elevation={3} sx={{ padding: 2, height: "100%" }}> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>POS</TableCell>
                <TableCell align="left">NO</TableCell>
                <TableCell align="left">DRIVER</TableCell>
                <TableCell align="left">CAR</TableCell>
                <TableCell align="left">LAPS</TableCell>
                <TableCell align="left">TIME/RETIRED</TableCell>
                <TableCell align="left">PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((results, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">{results.position}</TableCell>
                  <TableCell component="th" scope="row">
                    {results.number}
                  </TableCell>
                  <TableCell align="left">
                    {results.Driver.givenName} {results.Driver.familyName}
                  </TableCell>
                  <TableCell align="left">{results.Constructor.name}</TableCell>
                  <TableCell align="left">{results.laps}</TableCell>
                  <TableCell align="left">
                    {/* {results.Time.time} */}
                    SUS time
                  </TableCell>
                  <TableCell align="left">{results.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Paper>
          </Grid2>
        </Grid2> */}
      </Box>

      {/* <ul> */}

      {/* </ul> */}
    </div>
  );
};

export default Teams;
