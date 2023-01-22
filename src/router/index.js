import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const store = useAuthStore();

//   if (to.meta.requiresAuth && !store.$token) next({ name: "auth" });
//   else if (to.name == "auth" && store.$token) next({ name: "home" });
//   else next();
  
// });

export default router;
