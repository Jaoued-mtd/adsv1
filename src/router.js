import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import AdsCreate from "./pages/ads/AdsCreate.vue";
import AdsPage from "./pages/ads/AdsPage.vue";
import store from "./store/index.js";
import Profil from "./pages/user/Profil.vue";
import AdsDetail from "./pages/ads/AdsDetail.vue";
import Login from "./pages/user/LoginForm.vue";
import Register from "./pages/user/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/annonces", component: AdsPage },
    { path: "/annonces/:id", component: AdsDetail },
    { path: "/profil", component: Profil, meta: { requiresAuth: true } },
    { path: "/create", component: AdsCreate, meta: { requiresAuth: true } },
    { path: "/:notFound(.*)", component: NotFound },
    { path: "/login", component: Login, meta: { requiresUnauth: true } },
    { path: "/register", component: Register, meta: { requiresUnauth: true } },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
