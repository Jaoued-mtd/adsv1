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
    { path: "/", component: Home, meta: { title: "La Bredouille | Accueil" } },
    {
      path: "/annonces",
      component: AdsPage,
      meta: { title: "La Bredouille | Annonces" },
    },
    {
      path: "/annonces/:id",
      component: AdsDetail,
      meta: { title: "La Bredouille | Annonce" },
    },
    {
      path: "/profil",
      component: Profil,
      meta: { title: "La Bredouille | Profil", requiresAuth: true },
    },
    {
      path: "/create",
      component: AdsCreate,
      meta: { title: "La Bredouille | Création", requiresAuth: true },
    },
    { path: "/:notFound(.*)", component: NotFound },
    {
      path: "/login",
      component: Login,
      meta: { requiresUnauth: true, title: "La Bredouille | Connexion" },
    },
    {
      path: "/register",
      component: Register,
      meta: { requiresUnauth: true, title: "La Bredouille | Inscription" },
    },
  ],
});

router.beforeEach(function(to, _, next) {
  document.title = to.meta.title;

  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
