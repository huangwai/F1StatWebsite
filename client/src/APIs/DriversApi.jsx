// APIs for the Drivers Page

// Get drivers
import axios from "axios";

// Base URL of the Jolpica F1 API
const BASE_URL = "/api";

// Example function to get standings
export const getDrivers = async (season) => {
  try {
    const response = await axios.get(`${BASE_URL}/ergast/f1/${season}/drivers`);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};

// Example function to get drivers info
export const getDriversInfo = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/ergast/f1/drivers/${name}`);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};

//Get Driver Standings
// Example function to get standings
export const getDriverStandings = async (season) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/ergast/f1/${season}/driverstandings?cache_bust=${Date.now()}`
    );
    console.log("DRIVERAPI: ", response.data);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};

//Get Race Stats of each driver
// Example function to get standings
export const getDriverResults = async (name) => {
  try {
    if (name == undefined) {
      const response = await axios.get(
        `${BASE_URL}/ergast/f1/drivers/${name}/results`
      );
    } else {
      const response = await axios.get(
        `${BASE_URL}/ergast/f1/drivers/${name}/results`
      );
    }
    // https://api.jolpi.ca/ergast/f1/drivers/hamilton/results/
    const response = await axios.get(
      `${BASE_URL}/ergast/f1/drivers/${name}/results`
    );
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};
