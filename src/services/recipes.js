// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
let favoriteDictionary = {};
let watchedDictionary = {};

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
  amount,
  selectedCuisines,
  selectedDiets,
  selectedIntolerances
) {
  return mockGetRecipesPreview(amount);
}

export function mockGetLastRecipes(amount) {
  return mockGetRecipesPreview(amount);
}

export function mockGetMyRecipes() {
  return mockGetRecipesPreview(3);
}

export function mockLikeRecipe(recipeId) {}

export function mockCheckIfLiked(recipeId) {}

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
) {}
