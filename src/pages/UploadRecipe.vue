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
          this.instructions
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
</style>
