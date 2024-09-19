//This file manages general HTTP requests to the server that do not fall into the categories of authentication, user management, or specific recipe-related operations. This may include common utility functions for making API calls or other client-side tasks related to communication with the server.

import axios from "axios";
const API_URL = `https://alonandyoni.cs.bgu.ac.il/users`;

// Add to favorites
export async function addToFavorites(userDetails) {
  const response = await axios.post(`${API_URL}/favorites`, userDetails);
  console.log("Response:", response.data);
  return response;
}

// Remove from favorites
export async function removeFromFavorites(userDetails) {
  try {
    const response = await axios.delete(`${API_URL}/favorites`, {
      data: userDetails
    });
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error removing from favorites:", error);
    throw error;
  }
}

// Check if a recipe is favorited
export async function checkIfFavorite(username, recipe_id) {
  try {
    const response = await axios.get(`${API_URL}/isFavorite`, {
      params: { username, recipe_id }
    });
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error checking if favorite:", error);
    throw error;
  }
}

// Add to liked recipes
export async function addToLiked(userDetails) {
  const response = await axios.post(`${API_URL}/likeRecipe`, userDetails);
  console.log("Response:", response.data);
  return response;
}

// Remove from liked recipes
export async function removeFromLiked(userDetails) {
  try {
    const response = await axios.delete(`${API_URL}/likeRecipe`, {
      data: userDetails
    });
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error removing from liked recipes:", error);
    throw error;
  }
}

// Check if liked
export async function checkIfLiked(username, recipe_id) {
  try {
    const response = await axios.get(`${API_URL}/isLiked`, {
      params: { username, recipe_id }
    });
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error checking if liked:", error);
    throw error;
  }
}

// Add to watched recipes
export async function addToWatched(userDetails) {
  const response = await axios.post(`${API_URL}/watched`, userDetails);
  console.log("Response:", response.data);
  return response;
}

// Check if watched
export async function checkIfWatched(username, recipe_id) {
  try {
    const response = await axios.get(`${API_URL}/isWatched`, {
      params: { username, recipe_id }
    });
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error checking if watched:", error);
    throw error;
  }
}
