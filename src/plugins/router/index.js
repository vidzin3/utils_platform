import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/App.vue"),
      children: [
        {
          path: "/",
          component: () => import("@/layouts/default.vue"),
          children: [
            {
              path: "/",
              redirect: {
                name: "home",
              },
            },
            {
              path: "/",
              name: "home",
              component: () => import("@/pages/index.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
