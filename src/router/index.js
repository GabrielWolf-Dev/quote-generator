import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import RandomView from "@/views/RandomView.vue";
import AuthorQuotesView from "@/views/AuthorQuotesView.vue";
const SearchView = () => import("@/views/SearchView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/random",
    name: "random",
    component: RandomView,
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
