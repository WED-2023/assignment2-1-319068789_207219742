<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
        <ul class="recipe-overview">
          <li>
            <span>
              <i class="fas fa-clock"></i>
              {{ recipe.readyInMinutes }} minutes
            </span>
          </li>
          <li>
            {{ recipe.aggregateLikes }}
            <i class="fas fa-heart" style="color: orange;"></i>
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
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
          <div class="wrapped"></div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
export default {
  data() {
    return {
      recipe: null,
      vegan_img:
        "https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegen%20friendly.png?raw=true",
      gluten_free_img:
        "https://cdn-icons-png.flaticon.com/256/4876/4876700.png",
      vegeterian_img:
        "https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegetarian-icon.png?raw=true",
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        // response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
        //   {
        //     withCredentials: true
        //   }
        // );

        response = null;
        response = mockGetRecipeFullDetails(this.$route.params.recipeId);

        // console.log("response.status", response.status);
        if (response === null) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

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
      } = response.data.recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree,
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
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
</style>
