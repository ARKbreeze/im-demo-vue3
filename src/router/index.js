import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    children: [],
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
