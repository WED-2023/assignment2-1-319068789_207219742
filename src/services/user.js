//This file is responsible for managing user-specific data and preferences. It includes functions for retrieving user-related information, such as the user's favorite recipes, personal recipes, and recently watched recipes. Functions related to user-specific interactions with the application (like watched recipes) are also managed here.

import axios from "axios";
const API_URL = `https://alonandyoni.cs.bgu.ac.il/user`;

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
    return response;  u
  } catch (error) {
    console.error("Error fetching watched recipes:", error);
    throw error;
  }
}

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

  