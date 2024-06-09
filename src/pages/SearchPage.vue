<template>
  <div class="search-container">
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        @keyup.enter="searchRecipes"
        placeholder="Search for recipes..."
      />
      <button @click="searchRecipes">Search</button>
    </div>
    <b-container>
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import { mockSearchRecipes } from "../services/recipes.js";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  data() {
    return {
      query: "",
      recipes: [],
    };
  },
  methods: {
    async searchRecipes() {
      if (this.query.trim() === "") return;
      try {
        const response = mockSearchRecipes(this.query);
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

<style scoped>
.search-container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.search-bar {
  display: flex;
  margin-bottom: 20px;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

.search-bar button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff7f00;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #e65c00;
}

.search-results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.recipe-preview {
  position: relative;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipe-preview img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.recipe-info {
  margin-top: 10px;
  text-align: center;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  font-size: 24px;
  color: #ffffff; /* Default color */
  background-color: #ff7f00; /* Orange circle background color */
  width: 40px; /* Set width equal to height to ensure a perfect circle */
  height: 40px; /* Set height equal to width */
  border-radius: 50%; /* Make it a circle */
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Add transition for background color */
  line-height: 24px; /* Ensure the star icon is vertically centered */
}

.favorite-button:hover {
  background-color: #e65c00; /* Change background color on hover */
}

.favorite-button.favorited {
  color: #ffffff; /* Change button color to white when favorited */
}

.favorite-button.favorited .fa-star {
  color: #ffffff; /* Change star icon color to white when favorited */
}
</style>
