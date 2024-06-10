<template>
  <div class="upload-recipe-container">
    <h1>Upload Your Recipe</h1>
    <form @submit.prevent="uploadRecipe">
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
            class="remove-button"
          >
            -
          </button>
        </div>
        <button type="button" @click="addIngredient">+</button>
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
            class="remove-button"
          >
            -
          </button>
        </div>
        <button type="button" @click="addInstruction">+</button>
      </div>

      <div class="filters">
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

      <button type="submit">Upload Recipe</button>
    </form>
  </div>
</template>

<script>
import { mockUploadRecipe } from "../services/recipes.js";

export default {
  data() {
    return {
      title: "",
      image: null,
      time: "",
      servings: "",
      ingredients: [{ name: "" }],
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
        if (!response.ok) {
          throw new Error("Failed to upload recipe");
        }

        alert("Recipe uploaded successfully!");
        this.resetForm();
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
      this.ingredients = [{ name: "" }];
      this.instructions = [{ text: "" }];
      this.$refs.image.value = null; // Reset file input
    },
  },
};
</script>

<style scoped>
.upload-recipe-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.ingredient-item,
.instruction-item {
  display: flex;
  align-items: center;
}

.remove-button {
  margin-left: auto;
  margin-right: 5px; /* Adjust as needed for spacing */
  align-self: flex-start; /* Align the button to the start of the flex container */
}

.ingredient-item input[type="text"] {
  margin-bottom: 0px; /* Remove default bottom margin of the input */
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
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
  margin-left: 10px;
}

button[type="button"]:hover {
  background-color: #0056b3;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.filter-category {
  width: 30%;
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
