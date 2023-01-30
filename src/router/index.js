import daybookRouter from "@/modules/daybook/router";
import authRouter from "@/modules/auth/router";
import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import isAuthenticated from "@/modules/auth/router/auth-guard";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    beforeEnter:[isAuthenticated],
    path: '/daybook',
    ...daybookRouter
  },
  {
    path: '/auth',
    ...authRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
