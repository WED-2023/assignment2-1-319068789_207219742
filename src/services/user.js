//This file is responsible for managing user-specific data and preferences. It includes functions for retrieving user-related information, such as the user's favorite recipes, personal recipes, and recently watched recipes. Functions related to user-specific interactions with the application (like watched recipes) are also managed here.

import axios from "axios";
const API_URL = `https://alonandyoni.cs.bgu.ac.il/users`;

// Get my recipes
export async function getMyRecipes(username) {
  try {
    const response = await axios.get(`${API_URL}/myRecipes`, {
      params: { username },
      withCredentials: true 
    });
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching my recipes:", error);
    throw error;
  }
}

// Get favorite recipes
export async function getFavoriteRecipes(username) {
  try {
    const response = await axios.get(`${API_URL}/favorites`, {
      params: { username },
      withCredentials: true
    });
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching favorite recipes:", error);
    throw error;
  }
}

// Get last 3 watched recipes
export async function getLastRecipes(username) {
  try {
    let response;

    // Check if the user is logged in
    if (localStorage.username) {
      // Fetch last watched recipes if logged in
      response = await axios.get(`${API_URL}/watched`, {
        params: { username },
        withCredentials: true
      });
    } else {
      // Fetch family recipes if not logged in
      response = await axios.get(`https://alonandyoni.cs.bgu.ac.il/familyRecipes`);
    }

    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching watched recipes:", error);
    throw error;
  }
}


  