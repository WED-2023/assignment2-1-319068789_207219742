<template>
  <div class="upload-recipe-container">
    <h1 class="title">Upload Your Recipe</h1>
    <form @submit.prevent="uploadRecipe">
      <div class="form-content">
        <!-- Left Section -->
        <div class="left-section">
          <div class="form-group">
            <label for="title">Recipe Title:</label>
            <input type="text" v-model="title" id="title" required />
          </div>

          <div class="form-group">
            <label for="image">Recipe Image:</label>
            <input
              type="file"
              @change="handleImageUpload"
              id="image"
              ref="image"
              required
            />
          </div>

          <div class="form-group">
            <label for="time">Time to Make (minutes):</label>
            <input type="number" v-model="time" id="time" required />
          </div>

          <div class="form-group">
            <label for="servings">Number of Servings:</label>
            <input type="number" v-model="servings" id="servings" required />
          </div>
        </div>

        <!-- Middle Section -->
        <div class="mid-section">
          <div class="form-group">
            <label>Ingredients:</label>
            <div
              v-for="(ingredient, index) in ingredients"
              :key="index"
              class="ingredient-item"
            >
              <input
                type="text"
                v-model="ingredient.text"
                placeholder="Ingredient"
              />
              <button
                type="button"
                @click="removeIngredient(index)"
                class="addRemove-button"
              >
                -
              </button>
            </div>
            <button
              type="button"
              @click="addIngredient"
              class="addRemove-button"
            >
              +
            </button>
          </div>

          <div class="form-group">
            <label>Instructions:</label>
            <div
              v-for="(instruction, index) in instructions"
              :key="index"
              class="instruction-item"
            >
              <textarea
                v-model="instruction.text"
                :placeholder="'Step ' + (index + 1)"
              ></textarea>
              <button
                type="button"
                @click="removeInstruction(index)"
                class="addRemove-button"
              >
                -
              </button>
            </div>
            <button
              type="button"
              @click="addInstruction"
              class="addRemove-button"
            >
              +
            </button>
          </div>
        </div>

        <!-- Right Section -->
        <div class="right-section">
          <div class="filters">
            <!-- Cuisine Column -->
            <div class="filter-column">
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
            </div>

            <!-- Diet Column -->
            <div class="filter-column">
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
            </div>

            <!-- Intolerances Column -->
            <div class="filter-column">
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
                  <label :for="'intolerance-' + intolerance">{{
                    intolerance
                  }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="submit">Upload Recipe</button>
    </form>
  </div>
</template>

<script>
import { mockUploadRecipe } from "../services/recipes.js";

export default {
  name: "UploadRecipe",
  data() {
    return {
      title: "",
      image: null,
      time: "",
      servings: "",
      ingredients: [{ text: "" }],
      instructions: [{ text: "" }],
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
  methods: {
    handleImageUpload(event) {
      this.image = event.target.files[0];
    },
    addInstruction() {
      this.instructions.push({ text: "" });
    },
    removeInstruction(index) {
      this.instructions.splice(index, 1);
    },
    addIngredient() {
      this.ingredients.push({ text: "" });
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    async uploadRecipe() {
      try {
        const response = await mockUploadRecipe(
          this.title,
          this.image,
          this.time,
          this.servings,
          this.ingredients,
          this.instructions,
          this.selectedCuisines,
          this.selectedDiets,
          this.selectedIntolerances
        );
        if (response.status != 200) {
          throw new Error("Failed to upload recipe");
        }

        alert("Recipe uploaded successfully!");
        this.resetForm();
        this.$emit("upload-success");
      } catch (error) {
        console.error("Error uploading recipe:", error);
        alert("There was an error uploading your recipe. Please try again.");
      }
    },
    resetForm() {
      this.title = "";
      this.image = null;
      this.time = "";
      this.servings = "";
      this.ingredients = [{ text: "" }];
      this.instructions = [{ text: "" }];
      this.$refs.image.value = null; // Reset file input
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.upload-recipe-container {
  max-width: 1400px; /* Increased maximum width */
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-content {
  display: flex;
  justify-content: space-between;
  gap: 40px; /* Increased space between form columns */
}

.form-group {
  margin-bottom: 20px;
}

.left-section,
.mid-section,
.right-section {
  width: 33%; /* Adjusted width for each section */
}

.ingredient-item input[type="text"] {
  width: calc(115% - 50px); /* Adjusted width */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.instruction-item textarea {
  width: calc(115% - 50px); /* Adjusted width */
  height: 60px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.addRemove-button {
  padding: 6px; /* Adjusted padding */
  font-size: 16px;
  background-color: #dc3545; /* Red color for remove button */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0px; /* Adjusted margin */
  margin-bottom: 9px;
}

.addRemove-button:hover {
  background-color: #c82333; /* Darker red color on hover */
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
}

textarea {
  height: 60px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #218838;
}

button[type="button"] {
  background-color: #007bff;
}

button[type="button"]:hover {
  background-color: #0056b3;
}

.filters {
  display: flex;
  justify-content: space-between;
}

.filter-column {
  flex: 1;
  margin-right: 20px; /* Adjusted spacing between filter columns */
}

.filter-column:last-child {
  margin-right: 0; /* Remove margin for the last column */
}

.filter-category h4 {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

.filter-option {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.filter-option input[type="checkbox"] {
  margin-right: 10px;
}
</style>
