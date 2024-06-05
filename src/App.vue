<template>
  <div id="app">
    <div id="nav">
      <div class="nav-left">
        <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
        <router-link :to="{ name: 'search' }">Search</router-link>|
        <span v-if="!$root.store.username">
          Hello Guest:
          <router-link :to="{ name: 'register' }">Register</router-link>|
          <router-link :to="{ name: 'login' }">Login</router-link>
        </span>
        <span v-else>
          <div class="dropdown">
            <button class="dropbtn">Personal</button>
            <div class="dropdown-content">
              <router-link :to="{ name: 'favorites' }"
                >Favorites Recipes</router-link
              >
              <router-link :to="{ name: 'myRecipes' }">My Recipes</router-link>
              <router-link :to="{ name: 'familyRecipes' }"
                >Family Recipes</router-link
              >
            </div>
          </div>
        </span>
      </div>
      <div class="nav-right">
        <div class="dropdown right">
          <button class="dropbtn">{{ $root.store.username }}</button>
          <div class="dropdown-content">
            <button @click="Logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff; /* Ensure the background color is white or any color you prefer */
  z-index: 1000; /* Ensure it stays on top of other content */
  padding: 15px 30px; /* Adjusted padding for better aesthetics */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for better separation */
  display: flex;
  justify-content: space-between; /* Distribute space between the left and right sections */
  align-items: center; /* Align items vertically in the center */
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px; /* Add some spacing between links */
}

#nav a.router-link-exact-active {
  color: #42b983;
}

main {
  padding-top: 70px; /* Add padding to the main content to prevent overlap with the fixed nav */
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropbtn {
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
}
</style>
