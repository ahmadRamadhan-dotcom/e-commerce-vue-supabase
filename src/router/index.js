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
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("~/pages/Checkout.vue"),
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import("~/pages/Wishlist.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("~/pages/Cart.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("~/pages/Success.vue"),
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
