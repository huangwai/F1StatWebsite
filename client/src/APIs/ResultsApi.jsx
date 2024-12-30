import axios from "axios";
import React from "react";

// Base URL of the Jolpica F1 API
// const BASE_URL = "/api";
const BASE_URL = "https://api.jolpi.ca";

// Example function to get Results
export const getResult = async (season) => {
  try {
    const response = await axios.get(`${BASE_URL}/ergast/f1/${season}/results`);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};

// Example function to get Results for a specific driver given szn param/driver_id is provided
export const getDriverSeasonResults = async (season, driver_id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/ergast/f1/${season}/drivers/${driver_id}/results`
    );
    // console.log(response);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};

// Example function to get Results for a specific driver given szn param/driver_id is provided
export const getRoundResults = async (season, round) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/ergast/f1/${season}/${round}/results`
    );
    // console.log(response);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};
