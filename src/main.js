import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import createRouter from "./pages/routes";
import App from "./App.vue";

const app = createApp(App);
const router = createRouter(createWebHistory());
const store = createPinia();
app.use(router).use(store).mount("#app");
