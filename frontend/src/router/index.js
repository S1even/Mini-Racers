import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Utilise App.vue comme page principale
    meta: {
      title: 'Mini Racers'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login - Mini Racers'
    }
  },
  // Autres routes ici
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
