import { createRouter, createWebHistory } from "vue-router";
import Home from "~/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: () => import("~/pages/ListView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("~/pages/Product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
