<template>
  <div id="app">
    <div id="nav">
      <div class="nav-left">
        <router-link :to="{ name: 'main' }" class="brand"
          >Vue Recipes</router-link
        >
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'search' }">🔍 Search Recipe</router-link>

        <span v-if="!$root.store.username">
          Hello Guest:
          <router-link :to="{ name: 'register' }">Register</router-link>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </span>
        <span v-else>
          <router-link :to="{ name: 'upload' }">Upload Recipe</router-link>
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
        <div v-if="$root.store.username" class="dropdown right">
          <button class="dropbtn">👤 {{ $root.store.username }}</button>
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

<style scoped lang="scss">
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
  background-color: #fff;
  z-index: 1000;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

#nav a:hover {
  color: #ff7f00;
}

.brand {
  font-size: 24px;
  margin-right: 30px;
}

#nav a.router-link-exact-active {
  color: #ff7f00;
}

main {
  padding-top: 70px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a,
.dropdown-content button {
  color: #2c3e50;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: none;
  text-align: left;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
}

.dropdown-content a:hover,
.dropdown-content button:hover {
  background-color: #f1f1f1;
}

.dropbtn {
  background-color: #ff7f00;
  color: #fff;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropbtn:hover {
  background-color: #f8912a;
  color: #fff;
}

.right .dropbtn {
  background-color: #00c3ff;
}

.right .dropbtn:hover {
  background-color: #14b5e6;
  color: #fff;
}
</style>
