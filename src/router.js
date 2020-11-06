import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/annonces", component: null },
    {
      path: "/annonces/:id",
      component: null,
      props: true,
    },
    { path: "/register", component: null, meta: { requiresAuth: true } },
    { path: "/requests", component: null, meta: { requiresAuth: true } },
    { path: "/auth", component: null, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

// router.beforeEach(function(to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next('/auth');
//   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//     next('/coaches');
//   } else {
//     next();
//   }
// });

export default router;
