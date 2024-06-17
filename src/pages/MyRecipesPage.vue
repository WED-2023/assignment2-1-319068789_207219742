<template>
  <div class="container">
    <h1 class="title">My Recipes Page</h1>
    <div class="mid-section">
      <RecipePreviewList
        listType="myRecipes"
        class="recipePreview"
        :recipe="r"
      />
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList,
  },
};
</script>

<style scoped>
@import "@/scss/form-style.scss";
</style>
