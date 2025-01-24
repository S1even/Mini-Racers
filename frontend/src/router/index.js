import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '@/views/register.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login - Mini-Racers'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register - Mini-Racers'
    }
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
