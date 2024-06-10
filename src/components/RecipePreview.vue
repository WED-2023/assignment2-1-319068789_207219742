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
        <div class="recipe-title">
          {{ recipe.title }}
        </div>
        <ul class="recipe-overview">
          <li>
            <span>
              <i class="fas fa-clock"></i> {{ recipe.readyInMinutes }} minutes
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
      <i :class="[isFavorited ? 'fas fa-star' : 'far fa-star']"></i>
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
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.recipe-preview-container:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area */
  aspect-ratio: 16/9; /* Maintain a specific aspect ratio */
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 14pt;
  font-weight: bold;
  text-align: left;
  color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limits the text to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* Adds ellipsis at the end if the text overflows */
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
  list-style-type: none;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  text-align: center;
  color: #000;
}

.recipe-preview .recipe-footer ul.recipe-overview li img.icon {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  display: block;
}

.favorite-button {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
  font-size: 24px;
  color: #ffffff;
  background-color: #ff7f00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  line-height: 24px;
}

.favorite-button:hover {
  background-color: #e65c00;
}

.favorite-button.favorited {
  color: #ffffff;
}

.favorite-button.favorited .fa-star {
  color: #ffffff;
}
</style>
