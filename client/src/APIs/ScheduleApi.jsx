import axios from "axios";
import React from "react";

// Base URL of the Jolpica F1 API
const BASE_URL = "/api";

// Example function to get Results
export const getSchedule = async (season) => {
  try {
    const response = await axios.get(`${BASE_URL}/ergast/f1/${season}/races`);
    return response.data; // Return API response data
  } catch (error) {
    console.error("Error fetching schedule:", error);
    throw error;
  }
};
