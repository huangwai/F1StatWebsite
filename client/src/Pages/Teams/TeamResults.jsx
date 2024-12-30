import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTeamSeasonResult } from "../../APIs/TeamsApi";
import { getTeamStandings } from "../../APIs/TeamsApi";
import { Grid2 } from "@mui/material";
import FilterSeason from "../../Components/FilterSeason";
import { useNavigate, useParams } from "react-router-dom";
import FilterValues from "../../Components/Filter";
import Box from "@mui/material/Box";
import { dataYears, sections } from "../../Data/Data";
const TeamResults = () => {
  //get team results for a seeason API results
  const [teamResults, setTeamResults] = useState([]); //set array for drivers
  const [teamResults2, setTeamResults2] = useState([]); //set array for drivers

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [teamsAPI, setTeamsAPI] = useState([]);

  const [name, setName] = useState([]);
  const Season = location.pathname.split("/")[2];

  //get Driver ID from URL path
  //const Season = location.pathname.split("/")[2];
  // console.log("param2", Season);
  const {} = useParams();
  const { constructorid, year } = useParams();
  // console.log("Team Param constructorid", constructorid);
  // console.log("Team Param Year", year);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTeamResults = async () => {
      try {
        const data = await getTeamSeasonResult(year, constructorid); // Replace with the desired season
        // console.log("Team Season Result Responses:", data);
        const teamResultAPI = data.MRData.RaceTable.Races;
        setTeamResults(teamResultAPI);

        const data2 = await getTeamStandings(year); // Replace with the desired season
        const teamResultsAPI2 =
          data2.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setTeamResults2(teamResultsAPI2);
        console.log("data2: ", teamResults2);
        // setTeamResults2(data2);
        // console.log("data is: ", teamResultAPI2);
        setTeamsAPI(
          teamResultsAPI2.map((team) => ({
            id: team.Constructor.constructorId,
            name: team.Constructor.name,
          }))
        );
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeamResults();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("teamAPI2: ", teamsAPI);
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
              urlPath={`teams/result/${constructorid}`}
              label={"Season"}
            />
          </Grid2>
          <Grid2 item xs>
            <FilterValues
              data={sections}
              urlPath={`${year}`}
              label={"Section"}
            />
          </Grid2>
          <Grid2 item xs>
            <FilterValues
              data={teamsAPI}
              urlPath={`${year}/teams/result`}
              label={"Team"}
            />
          </Grid2>
          {/* <Grid2 item xs>
            <FilterValues data={teamsAPI} urlPath={`${param}/teams/result`} />
          </Grid2> */}
        </Grid2>
      </Box>

      <h1
        style={{
          color: "white",
          textAlign: "left",
          backgroundColor: "inherit",
        }}
      >
        {year} Formula 1 Constructor Standings:{" "}
        {teamResults[0].Results[0].Constructor.name}
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
                <TableCell align="left">PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamResults.map((results, index) => (
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
                    {Number(results.Results[0].points) +
                      Number(results.Results[1].points)}
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

export default TeamResults;
