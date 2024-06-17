<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header">
        <h1>{{ recipe.title }}</h1>
        <div v-if="$root.store.username" class="button-group">
          <button
            @click.stop.prevent="toggleLike"
            :class="{ liked: isLiked }"
            class="like-button"
          >
            <i :class="[isLiked ? 'fas fa-heart' : 'far fa-heart']"></i>
          </button>
          <button
            @click.stop.prevent="toggleFavorite"
            :class="{ favorited: isFavorited }"
            class="favorite-button"
          >
            <i :class="[isFavorited ? 'fas fa-star' : 'far fa-star']"></i>
          </button>
        </div>
        <img :src="recipe.image" class="center" />
        <ul class="recipe-overview">
          <li>
            <span>
              <i class="fas fa-clock"></i>
              {{ recipe.readyInMinutes }} minutes
            </span>
          </li>
          <li>
            <span>
              <i class="fas fa-user"></i>
              {{ recipe.servings }} servings
            </span>
          </li>
          <li>
            {{ recipe.aggregateLikes }}
            <i class="fas fa-heart" style="color: red;"></i>
          </li>
          <li>
            <img v-if="recipe.vegan" :src="vegan_img" class="icon" />
          </li>
          <li>
            <img v-if="recipe.vegetarian" :src="vegetarian_img" class="icon" />
          </li>
          <li>
            <img v-if="recipe.glutenFree" :src="gluten_free_img" class="icon" />
          </li>
        </ul>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <h4>Summary:</h4>
            <p>{{ recipe.summary }}</p>

            <h4>Ingredients:</h4>
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.amount }} {{ r.unit }} {{ r.name }}
              </li>
            </ul>

            <h4>Instructions:</h4>
            <ol>
              <li v-for="ins in recipe.instructions" :key="ins">
                {{ ins }}
              </li>
            </ol>
          </div>
          <div class="wrapped"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mockGetRecipeFullDetails,
  mockGetInstructions,
  mockAddToFavorites,
  mockRemoveFromFavorites,
  mockCheckIfFavorite,
  mockLikeRecipe,
  mockCheckIfLiked,
} from "../services/recipes.js";

export default {
  data() {
    return {
      instructions: [],
      recipe: null,
      vegan_img:
        "https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegen%20friendly.png?raw=true",
      gluten_free_img:
        "https://cdn-icons-png.flaticon.com/256/4876/4876700.png",
      vegetarian_img:
        "https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegetarian-icon.png?raw=true",
      isFavorited: false,
      isLiked: false,
    };
  },

  mounted() {
    this.created();
    this.updateRecipes();
    this.checkIfFavorite();
    this.checkIfLiked();
  },

  methods: {
    async created() {
      try {
        let response;

        response = mockGetRecipeFullDetails(this.$route.params.recipeId);

        if (response === null) this.$router.replace("/NotFound");

        let {
          analyzedInstructions,
          instructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          image,
          title,
          vegetarian,
          vegan,
          glutenFree,
          servings,
          summary,
        } = response.data.recipe;

        let _recipe = {
          instructions,
          analyzedInstructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          image,
          title,
          vegetarian,
          vegan,
          glutenFree,
          servings,
          summary,
        };

        this.recipe = _recipe;
      } catch (error) {
        console.log(error);
      }
    },
    async updateRecipes() {
      try {
        const response = mockGetInstructions(this.$route.params.recipeId);

        console.log(response);
        const analyzedInstructions = response.data.instructions;
        console.log(analyzedInstructions);
        this.instructions = [];
        this.instructions.push(...analyzedInstructions);
      } catch (error) {
        console.log(error);
      }
    },
    async checkIfFavorite() {
      try {
        const response = await mockCheckIfFavorite(this.$route.params.recipeId);
        console.log("Favorite check response:", response.data);
        this.isFavorited = response.data.isFavorite;
      } catch (error) {
        console.log(error);
      }
    },
    async checkIfLiked() {
      try {
        const response = await mockCheckIfLiked(this.$route.params.recipeId);
        console.log("Like check response:", response.data);
        this.isLiked = response.data.isLiked;
      } catch (error) {
        console.log(error);
      }
    },
    toggleFavorite() {
      this.isFavorited = !this.isFavorited;
      if (this.isFavorited) {
        mockAddToFavorites(this.$route.params.recipeId);
      } else {
        mockRemoveFromFavorites(this.$route.params.recipeId);
      }
    },
    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        mockLikeRecipe(this.$route.params.recipeId);
      } else {
        mockRemoveFromFavorites(this.$route.params.recipeId);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

ul.recipe-overview {
  padding: 10px;
  width: 70%;
  display: flex;
  justify-content: space-around; /* Evenly space items */
  margin-bottom: 0;
  list-style-type: none; /* Remove default list styling */
}

ul.recipe-overview li {
  text-align: center;
  color: #000; /* Change font color to black */
}

/* New CSS rule for smaller icons */
ul.recipe-overview li img.icon {
  width: 40px; /* Adjust the size as needed */
  height: 40px; /* Adjust the size as needed */
  margin: 0 auto; /* Center the image */
  display: block; /* Ensure the image is a block element */
}

.recipe-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.button-group {
  position: absolute;
  top: 80px; /* Adjusted to move it slightly down */
  right: 30px; /* Adjusted to move it slightly left */
  display: flex;
  gap: 10px; /* Space between buttons */
}

.favorite-button,
.like-button {
  padding: 8px;
  font-size: 24px; /* Adjusted for icon size */
  color: #ffffff; /* Default color */
  width: 40px; /* Set width equal to height to ensure a perfect circle */
  height: 40px; /* Set height equal to width */
  border-radius: 50%; /* Make it a circle */
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Add transition for background color */
  line-height: 24px; /* Ensure the icon is vertically centered */
}

.favorite-button {
  background-color: #ff7f00; /* Orange circle background color */
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

.like-button {
  background-color: #ff4d4d; /* Red circle background color */
}

.like-button:hover {
  background-color: #cc0000; /* Change background color on hover */
}

.like-button.liked {
  color: #ffffff; /* Change button color to white when liked */
}

.like-button.liked .fa-heart {
  color: #ffffff; /* Change heart icon color to white when liked */
}
</style>
