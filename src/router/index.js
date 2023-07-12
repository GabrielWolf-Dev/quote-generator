import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthorQuotesView from "../views/AuthorQuotesView.vue";
import SearchView from "../views/SearchView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:author",
    name: "author",
    component: AuthorQuotesView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
