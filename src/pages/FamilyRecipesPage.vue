<template>
  <div class="container">
    <h1 class="title">Family Recipes Page</h1>
    <div class="mid-section">
      <RecipePreviewList
        listType="familyRecipes"
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

<style>
.left-section {
  width: 45%;
}
</style>

<style scoped>
@import "@/scss/form-style.scss";
</style>
