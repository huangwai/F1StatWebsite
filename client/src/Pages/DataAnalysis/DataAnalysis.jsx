import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { colors } from "@mui/material";
import DriverCompare from "./DriverCompare";
export default function DataAnalysis() {
  return (
    <div
      style={{
        marginTop: 90,
        marginBottom: 90,
        backgroundColor: "white",
        // width: "50vw",
      }}
    >
      <DriverCompare />
    </div>
  );
}
