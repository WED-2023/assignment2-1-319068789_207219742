// src/services/recipes.js
import recipe_full_view1 from "../assets/mocks/recipe_full_view1.json";
import recipe_preview1 from "../assets/mocks/recipe_preview1.json";

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  recipes.push(recipe_preview1[11111]);
  recipes.push(recipe_preview1[22222]);
  recipes.push(recipe_preview1[33333]);

  let favoriteDictionary = {};
  localStorage.setItem("fevorites", favoriteDictionary);

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  return { data: { recipe: recipe_full_view1[recipeId] } };
}

export function mockAddToFavorites(recipeId) {
  localStorage.getItem("fevorites")[recipeId] = recipe_preview1[recipeId];
}

export function mockRemoveFromFavorites(recipeId) {
  delete localStorage.getItem("fevorites")[recipeId];
}

export function mockGetFavorites(recipeId) {
  let recipes = [];
  const favorites = localStorage.getItem("fevorites");
  for (let key in favorites) {
    recipes.push(favorites[key]);
  }

  return { data: { recipes: recipes } };
}
