import React from "react";
import axios from "axios";
// Base URL of the Jolpica F1 API
const BASE_URL = "/api";

// Example function to get standings
export const getTeamStandings = async (season) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/ergast/f1/${season}/constructorstandings`
    );
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching standings:", error);
    throw error;
  }
};
