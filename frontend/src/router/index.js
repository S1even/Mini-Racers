import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login - Mini-Racers'
    }
  },
  // Autres routes ici
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
