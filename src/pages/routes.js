import { createRouter } from "vue-router";
import Home from "./home/Home.vue";
import Cart from "./cart/Cart.vue";
import Auth from "./auth/Auth.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/auth", component: Auth },
];

export default (history) => {
  return createRouter({ history, routes });
};
