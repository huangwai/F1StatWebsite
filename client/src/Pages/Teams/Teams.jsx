import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTeamStandings } from "../../APIs/TeamsApi";
import { Link } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Teams = () => {
  const [teamStandings, setTeamStandings] = useState([]); //set array for drivers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //get Driver ID from URL path
  //const Season = location.pathname.split("/")[2];
  // console.log("param2", Season);
  const { param } = useParams();
  console.log("Team Param", param);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamStandings = async () => {
      try {
        const data = await getTeamStandings(param); // Replace with the desired season
        console.log(
          "API TEAM REsponse:",
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        );
        setTeamStandings(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
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
    <div>
      <h2>{param} Formula 1 Team Standings</h2>
      <ul>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
