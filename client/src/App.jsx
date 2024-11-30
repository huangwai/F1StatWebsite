import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Box } from "@mui/material";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/Error/ErrorPage";
import Drivers from "./Pages/Driver/Drivers";
import Teams from "./Pages/Teams/Teams";
import RaceSchedule from "./Pages/Schedule/RaceSchedule";
import DataAnalysis from "./Pages/DataAnalysis/DataAnalysis";
import NavBar from "./Components/NavBar";
import Results from "./Pages/Results/Results";
import DriverInfo from "./Pages/Driver/DriverInfo";
import Home2 from "./Pages/Home2";
import ResponsiveAppBar from "./Components/NavBar2";
function App() {
  const currentYear = new Date().getFullYear();

  function handleDriverClick() {
    console.log("Clicked navbar");
  }

  return (
    <div className="App">
      {/* <NavBar /> OLD */}
      <ResponsiveAppBar onClick={handleDriverClick} />
      <div
      // style={{ marginTop: 90, marginBottom: 90 }}
      >
        <BrowserRouter>
          <Routes>
            {/* user should be welcomed by the home page */}
            <Route path="/" element={<Home2 />}></Route>
            {/* Routes to the F1 Drivers page */}
            <Route path="drivers/:param" element={<Drivers />}></Route>
            <Route path="drivers/info/:param" element={<DriverInfo />}></Route>

            {/* Routes to the F1 Teams Page */}
            <Route path="teams/:param" element={<Teams />}></Route>

            {/* Routes to the F1 Race Schedule page */}
            <Route path="results/:param" element={<Results />}></Route>

            {/* Routes to the F1 Race Schedule page */}
            <Route path="schedule/:param" element={<RaceSchedule />}></Route>

            {/* Routes to the Race Data Analysis Page */}
            <Route path="analysis/:param" element={<DataAnalysis />}></Route>

            {/* if user enters incorrect url, it takes them to the Error page */}
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
