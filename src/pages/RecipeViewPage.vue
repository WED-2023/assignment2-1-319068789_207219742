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
            <!-- Use v-html to render the summary as HTML -->
            <p v-html="recipe.summary"></p>

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
            <!-- Use v-html to render the instructions as HTML -->
            <p v-html="recipe.instructions"></p>
          </div>
          <div class="wrapped"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {
  getFullRecipe,
} from "../services/recipes.js";

import {
  addToWatched,
  addToFavorites,
  removeFromFavorites,
  checkIfFavorite,
  addToLiked,
  checkIfLiked,
  removeFromLiked,
} from "../services/user.js";

export default {
  data() {
    return {
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
    this.checkIfFavoriteRecipe();
    this.checkIfLiked();
    this.handleWatched();
  },
  methods: {
    async created() {
      try {
        let response;

        response = await getFullRecipe(this.$route.params.recipeId);

        if (response === null) this.$router.replace("/NotFound");

        let {
          instructions,
          aggregateLikes,
          extendedIngredients,
          readyInMinutes,
          image,
          title,
          vegetarian,
          vegan,
          glutenFree,
          servings,
          summary,
        } = response.data;

        let _recipe = {
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
        };

        this.recipe = _recipe;
      } catch (error) {
        console.log(error);
      }
    },
    async checkIfFavoriteRecipe() {
      try {
        const response = await checkIfFavorite(localStorage.username ,this.$route.params.recipeId);
        console.log("Favorite check response:", response.data);
        this.isFavorited = response.data.isFavorite;
      } catch (error) {
        console.log(error);
      }
    },
    async checkIfLiked() {
      try {
        const response = await checkIfLiked(localStorage.username ,this.$route.params.recipeId);
        console.log("Like check response:", response.data);
        this.isLiked = response.data.isLiked;
      } catch (error) {
        console.log(error);
      }
    },
    async toggleFavorite() {
      if (localStorage.username) {
        this.isFavorited = !this.isFavorited;
        const userDetails = {
          username: localStorage.username,
          recipe_id: this.$route.params.recipeId,
        };
        console.log(`Toggling favorite status: Username: ${userDetails.username}, Recipe ID: ${userDetails.recipe_id}`);
        if (this.isFavorited) {
          await addToFavorites(userDetails);
        } else {
          await removeFromFavorites(userDetails);
        }
      } else {
        console.error('localStorage.username is not defined.');
      }

      
    },
    async toggleLike() {

      if (localStorage.username) {
        this.isLiked = !this.isLiked;
        const userDetails = {
          username: localStorage.username,
          recipe_id: this.$route.params.recipeId,
        };
        console.log(`Toggling like status: Username: ${userDetails.username}, Recipe ID: ${userDetails.recipe_id}`);
        if (this.isLiked) {
          await addToLiked(userDetails);
        } else {
          await removeFromLiked(userDetails);
        }
      } else {
        console.error('localStorage.username is not defined.');
      }
    },
    async handleWatched() {
      console.error("handle watch");
      if (localStorage.username) {
        const userDetails = {
          username: localStorage.username,
          recipe_id: this.$route.params.recipeId,
        };
        await addToWatched(userDetails);
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
