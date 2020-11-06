import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import AdsCreate from "./pages/ads/AdsCreate.vue";
import AdsList from "./pages/ads/AdsList.vue";
import UserAuth from "./pages/user/UserAuth.vue";
import Profil from "./pages/user/Profil.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/annonces", component: AdsList },
    {
      path: "/annonces/:id",
      component: null,
      props: true,
    },
    { path: "/profil", component: Profil, meta: { requiresAuth: true } },
    { path: "/create", component: AdsCreate, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
