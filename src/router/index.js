import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import RandomView from "@/views/RandomView.vue";
import AuthorQuotesView from "@/views/AuthorQuotesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
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
    path: "/author/:author",
    name: "author",
    component: AuthorQuotesView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => window.scrollTo({ top: 0, behavior: "smooth" }),
});

export default router;
