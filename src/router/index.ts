// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "../views/home/MainView.vue";
import Users from "../views/users/MainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router