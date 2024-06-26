import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "   ",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/FavoritesPage"),
  },
  // {
  //    path: "/upload",
  //  name: "upload",
  //  component: () => import("./pages/UploadRecipe"),
  // },
  {
    path: "/myRecipes",
    name: "myRecipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/familyRecipes",
    name: "familyRecipes",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/About",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
];

export default routes;
