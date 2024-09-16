// src/services/recipes.js
//This file deals with recipe-related functionality. It contains functions for uploading, retrieving, searching, and interacting with recipes. This includes adding recipes to favorites, checking if recipes are liked or watched, and managing family and random recipe requests.

import axios from "axios";
const API_URL = `https://alonandyoni.cs.bgu.ac.il`;

// Get family recipes
export async function getFamilyRecipes() {
  try {
    const response = await axios.get(`${API_URL}/familyRecipes`);
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching family recipes:", error);
    throw error;
  }
}

// Get random recipes
export async function getRandomRecipes() {
  const response = await axios.get(`${API_URL}/randomRecipes`);
  console.log("Response:", response.data);
  return response;
}

// Get full recipe details by recipe ID
export async function getFullRecipe(recipeId) {
  const response = await axios.get(`${API_URL}/getFullRecipe`, {
    params: { recipe_id: recipeId },
  });
  console.log('Recipe details:', response.data);
  return response;
}

// Upload a new recipe
export async function uploadRecipe(recipeDetails) {
  const response = await axios.post(`${API_URL}/uploadRecipe`, recipeDetails, {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('Recipe uploaded successfully:', response.data);
  return response;
}

// Search recipes
export async function searchRecipes(recipeDetails) {
  const response = await axios.get(`${API_URL}/searchRecipe`, {
    params: recipeDetails,
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('Recipe searched successfully:', response.data);
  return response;
}

// Upload an image
export async function uploadImage(imageData) {
  const response = await axios.post(`${API_URL}/uploadImage`, imageData);
  return response;
}


// *********************************************************** mock section **************************************************************************

import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
let favoriteDictionary = {};
let watchedDictionary = {};
let searchSet = new Set();
let isRegistered = false;

export function mockSetRegistered() {
  isRegistered = true;
}

export function mockGetFamilyRecipesPreview() {
  let recipes = [];

  recipes.push(recipe_preview[77777]);
  recipes.push(recipe_preview[88888]);
  recipes.push(recipe_preview[99999]);

  return { data: { recipes: recipes } };
}

export function mockGetRecipesPreview(amount = 1) {
  const recipeIds = Object.keys(recipe_preview);
  const totalRecipes = recipeIds.length;

  // Shuffle the array of recipe IDs
  for (let i = recipeIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [recipeIds[i], recipeIds[j]] = [recipeIds[j], recipeIds[i]];
  }

  // If the requested amount is greater than the total number of recipes, repeat recipes
  const selectedRecipes = [];
  while (selectedRecipes.length < amount) {
    const remaining = amount - selectedRecipes.length;
    const toAdd = Math.min(remaining, totalRecipes);
    selectedRecipes.push(
      ...recipeIds.slice(0, toAdd).map((id) => recipe_preview[id])
    );
  }

  return { data: { recipes: selectedRecipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  return { data: { recipe: recipe_full_view[recipeId] } };
}

export function mockGetInstructions(recipeId) {
  return {
    data: { instrucions: recipe_full_view[recipeId].analyzedInstructions },
  };
}

export function mockAddToSearchHistory(lastSearch) {
  if (isRegistered) {
    searchSet.add(lastSearch);
  }
}

export function mockClearSearchHistory() {
  searchSet.clear();
  isRegistered = false;
}

export function mockGetSearchHistory() {
  let searchHistory = [];
  for (const value of searchSet) {
    searchHistory.push(value);
  }
  return searchHistory;
}

export function mockAddToWatched(recipeId) {
  watchedDictionary[recipeId] = recipe_preview[recipeId];
}

export function mockRemoveFromWatched(recipeId) {
  delete watchedDictionary[recipeId];
}

export function mockGetWatched() {
  let recipes = [];
  for (let key in watchedDictionary) {
    recipes.push(watchedDictionary[key]);
  }

  return { data: { recipes: recipes } };
}

export function mockCheckIfWatched(recipeId) {
  return { data: { isWatched: recipeId in watchedDictionary } };
}

export function mockAddToFavorites(recipeId) {
  favoriteDictionary[recipeId] = recipe_preview[recipeId];
}

export function mockRemoveFromFavorites(recipeId) {
  delete favoriteDictionary[recipeId];
}

export function mockGetFavorites() {
  let recipes = [];
  for (let key in favoriteDictionary) {
    recipes.push(favoriteDictionary[key]);
  }

  return { data: { recipes: recipes } };
}

export function mockCheckIfFavorite(recipeId) {
  return { data: { isFavorite: recipeId in favoriteDictionary } };
}

// Mock functions to simulate API calls
export function mockSearchRecipes(
  query,
  number,
  selectedCuisines,
  selectedDiets,
  selectedIntolerances
) {
  return mockGetRecipesPreview(number);
}

export function mockGetLastRecipes(amount) {
  return mockGetRecipesPreview(amount);
}

export function mockGetMyRecipes() {
  return mockGetRecipesPreview(3);
}

export function mockLikeRecipe(recipeId) {}

export function mockCheckIfLiked(recipeId) {return { data: { isLiked: true } };}

export function mockUploadRecipe(
  title,
  image,
  time,
  servings,
  ingredients,
  instructions,
  selectedCuisines,
  selectedDiets,
  selectedIntolerances
) {
  return {
    status: 200,
  };
}
