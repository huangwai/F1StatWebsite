import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Drivers from "./Pages/Drivers";
import Teams from "./Pages/Teams";
import RaceSchedule from "./Pages/RaceSchedule";
import DataAnalysis from "./Pages/DataAnalysis";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user should be welcomed by the home page */}
        <Route path="/" element={<Home />}></Route>
        {/* Routes to the F1 Drivers page */}
        <Route path="drivers" element={<Drivers />}></Route>
        {/* Routes to the F1 Teams Page */}
        <Route path="teams" element={<Teams />}></Route>
        {/* Routes to the F1 Race Schedule page */}
        <Route path="schedule" element={<RaceSchedule />}></Route>
        {/* Routes to the Race Data Analysis Page */}
        <Route path="/analysis" element={<DataAnalysis />}></Route>
        {/* if user enters incorrect url, it takes them to the Error page */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
