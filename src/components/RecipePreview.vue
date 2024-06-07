<template>
  <div class="recipe-preview-container">
    <router-link
      :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
      class="recipe-preview"
    >
      <div class="recipe-body">
        <img v-if="image_load" :src="recipe.image" class="main-recipe-image" />
      </div>
      <div class="recipe-footer">
        <div :title="recipe.title" class="recipe-title">
          {{ recipe.title }}
        </div>
        <ul class="recipe-overview">
          <li>{{ recipe.readyInMinutes }} minutes</li>
          <li>{{ recipe.aggregateLikes }} likes</li>
          <li>
            <img v-if="recipe.vegan" :src="vegan_img" class="icon" />
          </li>
          <li>
            <img v-if="recipe.vegetarian" :src="vegeterian_img" class="icon" />
          </li>
          <li>
            <img v-if="recipe.glutenFree" :src="gluten_free_img" class="icon" />
          </li>
        </ul>
      </div>
    </router-link>
    <button
      @click.stop.prevent="toggleFavorite"
      :class="{ favorited: isFavorited }"
      class="favorite-button"
    >
      <i :class="[isFavorited ? 'bi bi-heart-fill' : 'bi bi-heart']"></i>
    </button>
  </div>
</template>

<script>
import {
  mockAddToFavorites,
  mockRemoveFromFavorites,
  mockCheckIfFavorite,
} from "../services/recipes.js";

export default {
  data() {
    return {
      image_load: true,
      vegan_img:
        "https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegen%20friendly.png?raw=true",
      gluten_free_img:
        "https://cdn-icons-png.flaticon.com/256/4876/4876700.png",
      vegeterian_img:
        "https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegetarian-icon.png?raw=true",
      isFavorited: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  async mounted() {
    this.checkIfFavorite();
    await this.loadImage();
  },
  methods: {
    async checkIfFavorite() {
      try {
        const response = await mockCheckIfFavorite(this.recipe.id);
        console.log("Favorite check response:", response.data);
        this.isFavorited = response.data.isFavorite;
      } catch (error) {
        console.log(error);
      }
    },
    async loadImage() {
      try {
        await this.axios.get(this.recipe.image);
        this.image_load = true;
      } catch (error) {
        console.log("Image load error:", error);
      }
    },
    toggleFavorite() {
      this.isFavorited = !this.isFavorited;
      if (this.isFavorited) {
        mockAddToFavorites(this.recipe.id);
      } else {
        mockRemoveFromFavorites(this.recipe.id);
      }
    },
  },
};
</script>

<style scoped>
.recipe-preview-container {
  position: relative;
  display: inline-block;
  width: 90%;
  height: 100%;
  margin: 10px 10px;
  transition: transform 0.3s ease; /* Smooth transition for transform */
}
.recipe-preview-container:hover {
  transform: scale(1.05); /* Scale the container up slightly on hover */
}
.recipe-preview {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .main-recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}

/* New CSS rule for smaller icons */
.recipe-preview .recipe-footer ul.recipe-overview li img.icon {
  width: 50px; /* Adjust the size as needed */
  height: 40px; /* Adjust the size as needed */
  margin: 0 auto; /* Center the image */
  display: block; /* Ensure the image is a block element */
}

.favorite-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0px;
  padding: 5px;
  font-size: 24px; /* Adjusted for icon size */
  color: #007bff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.favorite-button.favorited {
  color: #28a745; /* Change color when favorited */
}

.recipe-preview-container:hover .favorite-button {
  transform: scale(1.05); /* Scale the favorite button up slightly on hover */
}
</style>
