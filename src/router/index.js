import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/module',
    name: 'Module',
    component: () => import('../views/modulePage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;