<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="main-content">
      <div class="left-section">
        <RecipePreviewList
          title="Randome Recipes"
          class="RandomRecipes center"
        />
      </div>
      <div class="right-section">
        <router-link v-if="!$root.store.username" to="/login" tag="button"
          >You need to Login to view this</router-link
        >

        <RecipePreviewList
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true,
          }"
          disabled
        ></RecipePreviewList>
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

<style lang="scss" scoped></style>
