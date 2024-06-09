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

      <!-- Dropdown box for filters -->
      <div class="filter-dropdown">
        <select v-model="selectedCuisines" multiple>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="Greek">Greek</option>
          <option value="Latine">Latine</option>
        </select>
        <select v-model="selectedDiets" multiple>
          <option value="Ketogenic">Ketogenic</option>
          <option value="Vegetarian">Vegetarian</option>
          <!-- Add other diet options here -->
        </select>
        <select v-model="selectedIntolerances" multiple>
          <option value="Dairy">Dairy</option>
          <option value="Egg">Egg</option>
          <!-- Add other intolerance options here -->
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
      lastSearches: [],
      showDropdown: false,
      amount: 5, // Default amount of results
      selectedCuisines: [],
      selectedDiets: [],
      selectedIntolerances: [],
    };
  },
  mounted() {
    this.loadLastSearches();
  },
  methods: {
    async searchRecipes() {
      if (this.query.trim() === "") return;
      try {
        const response = await mockSearchRecipes(
          this.query,
          this.amount,
          this.selectedCuisines,
          this.selectedDiets,
          this.selectedIntolerances
        );
        console.log(response);
        const recipes = response.data.recipes;
        console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
        this.saveSearch(this.query);
      } catch (error) {
        console.log(error);
      }
    },
    saveSearch(query) {
      let searches = JSON.parse(localStorage.getItem("lastSearches")) || [];
      searches = searches.filter((search) => search !== query);
      searches.unshift(query);
      if (searches.length > 5) {
        searches.pop();
      }
      localStorage.setItem("lastSearches", JSON.stringify(searches));
      this.loadLastSearches();
    },
    loadLastSearches() {
      this.lastSearches =
        JSON.parse(localStorage.getItem("lastSearches")) || [];
    },
    selectSearch(query) {
      this.query = query;
      this.showDropdown = false;
      this.searchRecipes();
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
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar input[type="text"] {
  flex: 1;
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
  padding: 10px 20px;
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

.search-results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.filter-dropdown {
  display: flex;
  align-items: center;
}

.filter-dropdown select {
  margin-right: 10px;
  padding: 10px;
  font-size: 16px;
}
</style>
