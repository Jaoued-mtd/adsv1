import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import AdsCreate from "./pages/ads/AdsCreate.vue";
import AdsPage from "./pages/ads/AdsPage.vue";
import UserAuth from "./pages/user/UserAuth.vue";
import Profil from "./pages/user/Profil.vue";
import store from "./store/index.js";
import AdsDetail from "./pages/ads/AdsDetail";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/annonces", component: AdsPage },
    { path: "/annonces/:id", component: AdsDetail },
    { path: "/profil", component: Profil, meta: { requiresAuth: true } },
    { path: "/create", component: AdsCreate, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
