<template>
  <b-container>
    <h3 class="list-title">
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row v-for="r in recipes" :key="r.id">
      <RecipePreview class="recipePreview" :recipe="r" />
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import {
  mockGetRecipesPreview,
  mockGetLastRecipes,
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
      validator: (value) => ["randomRecipes", "lastRecipes"].includes(value),
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
  methods: {
    async updateRecipes() {
      try {
        const amountToFetch = 3; // Set this to how many recipes you want to fetch
        let response;
        if (this.listType === "randomRecipes") {
          response = mockGetRecipesPreview(amountToFetch);
        } else if (this.listType === "lastRecipes") {
          response = mockGetLastRecipes(amountToFetch);
        }
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
</style>
