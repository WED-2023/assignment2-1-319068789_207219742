<template>
  <div class="upload-recipe-container">
    <h1 class="title">Upload Your Recipe</h1>
    <form @submit.prevent="handleSubmit">
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
            <label for="summary">Short summary:</label>
            <input type="text" v-model="summary" id="summary" required />
          </div>

          <div class="form-group">
            <label for="time">Time to Make (minutes):</label>
            <input
              type="number"
              v-model.number="time"
              id="time"
              required
              min="1"
            />
          </div>
          

          <div class="form-group">
            <label for="servings">Number of Servings:</label>
            <input
              type="number"
              v-model.number="servings"
              id="servings"
              required
              min="1"
            />
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
                v-model="ingredient.amount"
                placeholder="Amount"
                class="ingredient-field amount"
              />
              <input
                type="text"
                v-model="ingredient.unit"
                placeholder="Unit"
                class="ingredient-field unit"
              />
              <input
                type="text"
                v-model="ingredient.name"
                placeholder="Ingredient Name"
                class="ingredient-field name"
              />
              
            </div>
            <button
                type="button"
                @click="removeIngredient(index)"
                class="addRemove-button"
              >
                -
              </button>
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
import { uploadRecipe, uploadImage } from "../services/recipes.js";

export default {
  name: "UploadRecipe",
  data() {
    return {
      title: "",
      image: null, // Store the image data URL here
      summary: "",
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
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      try {
        // Upload image to server
        const imageData = new FormData();
        imageData.append("image", file);
        const response = await uploadImage(imageData);

        // Assuming server responds with image path or filename
        if (response.status === 200) {
          this.image = response.data.imagePath; // Store path or filename
        } else {
          throw new Error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("There was an error uploading your image. Please try again.");
      }
    },
    addInstruction() {
  this.instructions.push({ text: "" });
},

removeInstruction(index) {
  this.instructions.splice(index, 1);
},

    addIngredient() {
  this.ingredients.push({ amount: "", unit: "", name: "" });
},

removeIngredient(index) {
  this.ingredients.splice(index, 1);
},

async handleSubmit() {
  if (!this.validateInputs()) {
    alert("Time to make and Number of Servings must be greater than 1.");
    return;
  }

  try {
    // Prepare the data for the recipe
    const recipeDetails = {
      title: this.title,
      image: this.image, // Use the image data URL here
      summary: this.summary,
      readyInMinutes: this.time,
      servings: this.servings,
      cuisines: this.selectedCuisines,
      diets: this.selectedDiets,
      intolerances: this.selectedIntolerances,
      username: localStorage.username,
      ingredients: this.ingredients.map(ingredient => ({
        amount: ingredient.amount,
        unit: ingredient.unit,
        name: ingredient.name,
      })),
      instructions: this.instructions.map((instruction, index) => ({
        stepNumber: index + 1,
        description: instruction.text,
      })),
    };

    // Send the data to the server
    const response = await uploadRecipe(recipeDetails);
    if (response.status != 201) {
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
    validateInputs() {
      return (
        Number.isInteger(this.time) &&
        this.time > 1 &&
        Number.isInteger(this.servings) &&
        this.servings > 1
      );
    },
    resetForm() {
      this.title = "";
      this.image = null;
      this.summary = "";
      this.time = "";
      this.servings = "";
      this.ingredients = [{ text: "" }];
      this.instructions = [{ text: "" }];
      // Clear file input
      const fileInput = this.$refs.image;
      if (fileInput) {
        fileInput.value = null;
      }
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
  max-width: 1400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-content {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.form-group {
  margin-bottom: 20px;
}

.left-section,
.mid-section,
.right-section {
  width: 33%;
}

.ingredient-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ingredient-field {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.ingredient-field.amount,
.ingredient-field.unit {
  width: 80px; /* Adjust width for amount and unit */
}

.ingredient-field.name {
  flex: 1; /* Take up remaining space */
  margin-left: 10px; /* Space between fields */
}

.addRemove-button {
  padding: 6px;
  font-size: 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px; /* Space between button and fields */
}

.addRemove-button:hover {
  background-color: #c82333;
}

.ingredient-item input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.instruction-item textarea {
  width: calc(100% - 22px); /* Adjust width */
  height: 60px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  margin-right: 20px;
}

.filter-column:last-child {
  margin-right: 0;
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
