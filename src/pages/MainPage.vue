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
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.main-content {
  display: flex;
  justify-content: space-between;
}

.section {
  flex-basis: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left-section {
  width: 45%; /* Fixed width for consistency */
}

.right-section {
  width: 45%; /* Fixed width for consistency */
  position: relative;
}

.blur {
  filter: blur(4px);
  pointer-events: none;
}

.recipe-preview-list {
  width: 100%; /* Ensure the list takes up the full width of its container */
  margin-bottom: 30px;
}

button {
  display: block;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  text-align: center;
  background-color: #ff7f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e65c00;
}
</style>
