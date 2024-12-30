import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTeamStandings } from "../../APIs/TeamsApi";
import { Grid2, Link, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import FilterValues from "../../Components/Filter";
import FilterSeason from "../../Components/FilterSeason";
import Box from "@mui/material/Box";
import { dataYears, sections } from "../../Data/Data";
const Teams = () => {
  const [teamStandings, setTeamStandings] = useState([]); //set array for drivers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [teams, setTeams] = useState([]);

  const { param } = useParams();
  console.log("Team Param", param);
  const navigate = useNavigate();
  const Season = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchTeamStandings = async () => {
      try {
        const data = await getTeamStandings(param); // Replace with the desired season
        console.log(
          "API TEAM REsponse:",
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        );
        const teamAPI =
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setTeamStandings(teamAPI);
        //set driver list
        setTeams(
          teamAPI.map((team) => ({
            id: team.Constructor.constructorId,
            name: `${team.Constructor.name}`,
          }))
        );
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    //fetches all drivers
    fetchTeamStandings();
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
              urlPath={"teams"}
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
              data={teams}
              urlPath={`${param}/teams/result`}
              label={"Team"}
            />
            {/* path="/:year/teams/result/:constructorid" */}
          </Grid2>
        </Grid2>
      </Box>
      <h2 style={{ color: "white", textAlign: "center" }}>
        {param} Formula 1 Team Standings
      </h2>
      <ul>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "90vw" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>POS</TableCell>
                <TableCell align="left">Constructor Name</TableCell>
                <TableCell align="left">Nationality</TableCell>
                <TableCell align="left">Points</TableCell>
                <TableCell align="left">Wins</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamStandings.map((team, index) => (
                // {rows.map((row) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{team.position}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() =>
                      navigate(`/drivers/info/${team.Constructor.name}`)
                    }
                  >
                    {team.Constructor.name}
                    <img
                      src={`https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/${param}/${team.Constructor.constructorId}.png`}
                      style={{ width: "50%", height: "auto", px: "10vw" }}
                    />

                    {/* <Link href={driverStanding.Driver.url}>
                      {driverStanding.Driver.givenName}{" "}
                      {driverStanding.Driver.familyName}
                    </Link> */}
                  </TableCell>
                  <TableCell align="left">
                    {team.Constructor.nationality}
                  </TableCell>
                  <TableCell align="left">{team.points} PTS</TableCell>
                  <TableCell align="left">{team.wins}</TableCell>
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
