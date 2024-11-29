import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { colors } from "@mui/material";

export default function DataAnalysis() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>2024 Driver Point Comparision</h2>
      <LineChart
        xAxis={[
          {
            data: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 22, 23, 24,
            ],
            label: "Rounds",
          },
        ]}
        series={[
          {
            data: [
              2, 3, 6, 20, 35, 40, 55, 66, 77, 80, 100, 120, 140, 159, 189, 200,
              240, 260, 276, 280, 300, 340, 350, 370, 400,
            ],
            label: "Max Verstappen",
            color: "#1D19AC",
          },
          {
            data: [
              10, 34, 50, 55, 60, 30, 55, 80, 88, 94, 103, 121, 143, 160, 186,
              211, 233, 243, 251, 291, 310, 324, 350, 370, 410,
            ],
            label: "Lando Norris",
            color: "#FF8000",
          },
        ]}
        width={1000}
        height={500}
      />
    </div>
  );
}
