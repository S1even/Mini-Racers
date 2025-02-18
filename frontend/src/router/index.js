import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Contents from '@/views/Contents.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
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
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register - Mini Racers'
    }
  },
  {
    path: '/contents',
    name: 'Contents',
    component: Contents,
    meta: {
      title: 'Contents - Mini Racers'
    }
  }
  // Autres routes ici
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
