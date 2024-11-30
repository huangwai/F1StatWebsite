import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getResult } from "../../APIs/ResultsApi";
import { useNavigate, useParams } from "react-router-dom";

const Teams = () => {
  const [result, setResult] = useState([]); //set array for drivers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //get Driver ID from URL path
  //const Season = location.pathname.split("/")[2];
  // console.log("param2", Season);
  const { param } = useParams();
  console.log("Result Param", param);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const data = await getResult(param); // Replace with the desired season
        console.log("API RESULT REsponse:", data.MRData.RaceTable.Races);
        setResult(data.MRData.RaceTable.Races);
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
      <h2 style={{ color: "white", textAlign: "center" }}>
        {param} Formula 1 Results
      </h2>
      <ul>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "90vw" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>GRAND PRIX</TableCell>
                <TableCell align="left">DATE</TableCell>
                <TableCell align="left">WINNER</TableCell>
                <TableCell align="left">CAR</TableCell>
                <TableCell align="left">LAPS</TableCell>
                <TableCell align="left">TIME</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((results, index) => (
                // {rows.map((row) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    {results.Circuit.circuitName}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    // onClick={() => navigate(`/drivers/info/${results}`)}
                  >
                    {results.date}
                    {/* <Link href={driverStanding.Driver.url}>
                      {driverStanding.Driver.givenName}{" "}
                      {driverStanding.Driver.familyName}
                    </Link> */}
                  </TableCell>
                  <TableCell align="left">
                    {results.Results[0].Driver.givenName}{" "}
                    {results.Results[0].Driver.familyName}
                  </TableCell>
                  <TableCell align="left">
                    {results.Results[0].Constructor.name}
                  </TableCell>
                  <TableCell align="left">{results.Results[0].laps}</TableCell>
                  <TableCell align="left">
                    {results.Results[0].Time.time}
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
