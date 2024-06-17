<template>
  <b-container>
    <h3 class="list-title">
      {{ title }}
      <slot></slot>
    </h3>
    <template v-if="isTwoPerRow">
      <b-row>
        <b-col cols="6" v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </template>
    <div v-if="listType === 'randomRecipes'" class="button-container">
      <button @click="updateRecipes">Show Me Another 3 Random Recipes</button>
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import {
  mockGetRecipesPreview,
  mockGetLastRecipes,
  mockGetFamilyRecipesPreview,
  mockGetFavorites,
  mockGetMyRecipes,
} from "../services/recipes.js";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    listType: {
      type: String,
      required: true,
      validator: (value) =>
        [
          "randomRecipes",
          "lastRecipes",
          "myRecipes",
          "familyRecipes",
          "favorites",
        ].includes(value),
    },
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  computed: {
    isTwoPerRow() {
      return ["favorites", "myRecipes", "familyRecipes"].includes(
        this.listType
      );
    },
  },
  methods: {
    async updateRecipes() {
      try {
        const amountToFetch = 3; // Set this to how many recipes you want to fetch
        const fetchFunctions = {
          randomRecipes: () => mockGetRecipesPreview(amountToFetch),
          lastRecipes: () => mockGetLastRecipes(amountToFetch),
          familyRecipes: () => mockGetFamilyRecipesPreview(),
          myRecipes: () => mockGetMyRecipes(),
          favorites: () => mockGetFavorites(),
        };

        const fetchFunction = fetchFunctions[this.listType];
        if (!fetchFunction) throw new Error("Invalid list type");

        const response = await fetchFunction();
        console.log(response);

        const recipes = response.data.recipes;
        console.log(recipes);

        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

.list-title {
  font-size: 1.7rem; /* Adjust the font size as needed */
  font-weight: bold; /* Make the font bold */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* Specify a special font family */
  color: #333; /* Adjust the color as needed */
  margin-bottom: 1rem; /* Add some spacing between the title and the content */
}

.button-container {
  margin-top: 1rem;
  text-align: center;
}

button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ff7f00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e65c00;
}
</style>
