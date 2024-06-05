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

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.main-content {
  display: flex;
  justify-content: space-between;
  gap: 200px; /* Increase the gap between the left and right sections */
}

.left-section,
.right-section {
  width: 45%; /* Adjusted width to accommodate the increased gap */
}

.RandomRecipes {
  margin: 10px 0 10px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
