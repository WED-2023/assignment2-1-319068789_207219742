<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="main-content">
      <div class="section left-section">
        <RecipePreviewList
          title="Explore this recipes"
          listType="randomRecipes"
          class="center"
        />
      </div>
      <div class="section right-section">
        <router-link v-if="!$root.store.username" to="/login" tag="button">
          You need to Login to view this
        </router-link>

        <RecipePreviewList
          title="Last Viewed Recipes"
          listType="lastRecipes"
          :class="{
            blur: !$root.store.username,
            center: true,
          }"
        />
      </div>
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
