<template>
  <div class="search-container">
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        @focus="showDropdown = true"
        @keyup.enter="searchRecipes"
        placeholder="Search for recipes..."
      />
      <div class="amount-container">
        <label for="amount" class="amount-label">Number of results:</label>
        <select v-model="amount" id="amount" class="amount-input">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <button @click="searchRecipes">Search</button>
      <div
        class="dropdown"
        v-show="showDropdown"
        @mouseleave="showDropdown = false"
      >
        <ul>
          <li
            v-for="(item, index) in lastSearches"
            :key="index"
            @click="selectSearch(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Sorting dropdown -->
    <div class="sort-container">
      <label for="sort" class="sort-label">Sort by:</label>
      <select v-model="sortCriteria" id="sort" class="sort-input">
        <option value="readyInMinutes">Ready in Minutes</option>
        <option value="aggregateLikes">Likes</option>
        <option value="relevance">Relevance</option>
      </select>
    </div>

    <div class="main-content">
      <b-container class="recipes-container">
        <b-row v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-row>
      </b-container>

      <!-- Filter toolbar -->
      <div class="filter-toolbar">
        <h3 class="filter-title">Filters</h3>
        <div class="filter-category">
          <h4>Cuisine</h4>
          <div
            v-for="(cuisine, index) in cuisines"
            :key="index"
            class="filter-option"
          >
            <input
              type="checkbox"
              :id="'cuisine-' + cuisine"
              :value="cuisine"
              v-model="selectedCuisines"
            />
            <label :for="'cuisine-' + cuisine">{{ cuisine }}</label>
          </div>
        </div>

        <div class="filter-category">
          <h4>Diet</h4>
          <div
            v-for="(diet, index) in diets"
            :key="index"
            class="filter-option"
          >
            <input
              type="checkbox"
              :id="'diet-' + diet"
              :value="diet"
              v-model="selectedDiets"
            />
            <label :for="'diet-' + diet">{{ diet }}</label>
          </div>
        </div>

        <div class="filter-category">
          <h4>Intolerances</h4>
          <div
            v-for="(intolerance, index) in intolerances"
            :key="index"
            class="filter-option"
          >
            <input
              type="checkbox"
              :id="'intolerance-' + intolerance"
              :value="intolerance"
              v-model="selectedIntolerances"
            />
            <label :for="'intolerance-' + intolerance">{{ intolerance }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import {
  searchRecipes,
} from "../services/recipes.js";
import { shared_data } from "../main.js"; 



export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  data() {
    return {
      query: "",
      recipes: [],
      lastSearches: [],
      showDropdown: false,
      amount: 5,
      sortCriteria: "relevance",
      selectedCuisines: [],
      selectedDiets: [],
      selectedIntolerances: [],
      cuisines: ["Mexican", "Italian", "Chinese", "Indian", "Greek", "Latine"],
      diets: [
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Low FODMAP",
        "Whole30",
      ],
      intolerances: [
        "Dairy",
        "Egg",
        "Gluten",
        "Grain",
        "Peanut",
        "Seafood",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sulfite",
        "Tree Nut",
        "Wheat",
      ],
    };
  },
  mounted() {
    this.loadLastSearches();
  },
  methods: {
    async searchRecipes() {
      if (this.query.trim() === "") return;
      try {
          const recipeDetails = {
            query: this.query,
            number: this.amount,
            cuisine: this.selectedCuisines,
            diet: this.selectedDiets,
            intolerances: this.selectedIntolerances,
            
          };
        const response = await searchRecipes(recipeDetails);

        let recipes = response.data;

        if (recipes.length === 0) {
          alert("No matching result");
        }

        // Sort recipes based on the selected criteria
        recipes = this.sortRecipes(recipes, this.sortCriteria);

        this.recipes = recipes;
        this.saveSearch(this.query);
      } catch (error) {
        console.log(error);
      }
    },
    sortRecipes(recipes, criteria, ascending = true) {
      if (criteria === "relevance") {
        return recipes;
      }
      return recipes.sort((a, b) => {
        if (ascending) {
          return a[criteria] - b[criteria];
        } else {
          return b[criteria] - a[criteria];
        }
      });
    },
    saveSearch(query) {
      if (shared_data.username) {  // Check if the user is logged in
        localStorage.setItem("lastSearchQuery", query);  // Save to localStorage
      }
    },
    loadLastSearches() {
      if (shared_data.username) { // Checks if the user is logged in
        this.query = localStorage.getItem("lastSearchQuery") || ""; // Load the last search query if it exists
      }
    },
    selectSearch(query) {
      this.query = query;
      this.showDropdown = false;
      this.searchRecipes();
    },
  },
  watch: {
    sortCriteria(newCriteria) {
      let ascending = true;
      if (newCriteria === "aggregateLikes") {
        ascending = false;
      }
      if (newCriteria === "relevance") {
        this.searchRecipes();
      } else {
        this.recipes = this.sortRecipes(this.recipes, newCriteria, ascending);
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar input[type="text"] {
  flex: 2; /* Input box will take twice the space */
  padding: 10px;
  font-size: 16px;
}

.amount-container {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.amount-label {
  margin-right: 5px;
  font-size: 16px;
}

.amount-input {
  padding: 10px;
  font-size: 16px;
}

.search-bar button {
  flex: 1; /* Button will take the remaining space */
  padding: 10px 10px; /* Adjust padding for button size */
  font-size: 16px;
  background-color: #ff7f00;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
}

.search-bar button:hover {
  background-color: #e65c00;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

.main-content {
  display: flex;
}

.recipes-container {
  flex: 3;
  margin-right: 20px;
}

.filter-toolbar {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9; /* Slightly different color */
  border-left: 1px solid #ccc;
}

.filter-title {
  margin-bottom: 20px;
  font-size: 30px;
  color: #333;
}

.filter-category {
  margin-bottom: 20px;
}

.filter-category h4 {
  margin-bottom: 10px;
}

.filter-option {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.filter-option input[type="checkbox"] {
  margin-right: 10px;
}

.filter-option label {
  font-size: 14px;
}

.sort-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.sort-label {
  margin-right: 5px;
  font-size: 16px;
}

.sort-input {
  padding: 10px;
  font-size: 16px;
}
</style>
