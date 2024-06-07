// src/services/recipes.js
import recipe_full_view1 from "../assets/mocks/recipe_full_view1.json";
import recipe_preview1 from "../assets/mocks/recipe_preview1.json";
let favoriteDictionary = {};

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  recipes.push(recipe_preview1[11111]);
  recipes.push(recipe_preview1[22222]);
  recipes.push(recipe_preview1[33333]);

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  return { data: { recipe: recipe_full_view1[recipeId] } };
}

export function mockAddToFavorites(recipeId) {
  favoriteDictionary[recipeId] = recipe_preview1[recipeId];
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
