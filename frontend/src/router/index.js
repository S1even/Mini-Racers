import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Contents from '@/views/Contents.vue';
import About from '@/views/About.vue';
import Settings from '@/views/Settings.vue';
import NotFound from '@/views/NotFound.vue';

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
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About - Mini Racers'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      title: 'Settings - Mini Racers'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
  // Autres routes ici
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
