// src/services/recipes.js
import recipe_full_view1 from "../assets/mocks/recipe_full_view1.json";
import recipe_full_view2 from "../assets/mocks/recipe_full_view2.json";
import recipe_full_view3 from "../assets/mocks/recipe_full_view3.json";
import recipe_preview1 from "../assets/mocks/recipe_preview1.json";
import recipe_preview2 from "../assets/mocks/recipe_preview2.json";
import recipe_preview3 from "../assets/mocks/recipe_preview3.json";

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  recipes.push(recipe_preview1);
  recipes.push(recipe_preview2);
  recipes.push(recipe_preview3);

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  if (recipeId === 11111) {
    return { status: 200, data: { recipe: recipe_full_view1 } };
  } else if (recipeId === 22222) {
    return { status: 200, data: { recipe: recipe_full_view2 } };
  } else if (recipeId === 33333) {
    return { status: 200, data: { recipe: recipe_full_view3 } };
  } else {
    return { status: 404, data: { message: "Recipe not found" } };
  }
}
