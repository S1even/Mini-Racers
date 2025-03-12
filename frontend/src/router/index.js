import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Contents from '@/views/Contents.vue';
import About from '@/views/About.vue';
import Settings from '@/views/Settings.vue';
import NotFound from '@/views/NotFound.vue';
import ClassB from '@/views/ClassB.vue';
import ClassA from '@/views/ClassA.vue';
import ClassC from '@/views/ClassC.vue';
import ClassD from '@/views/ClassD.vue';
import ClassE from '@/views/ClassE.vue';
import ClassExtra from '@/views/ClassExtra.vue';

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
    path: '/contents/class-a',
    name: 'Class-A',
    component: ClassA, 
    meta: {
      title: 'Class-A - Mini Racers'
    }
  },
  {
    path: '/contents/class-b',
    name: 'Class-B',
    component: ClassB, 
    meta: {
      title: 'Class-B - Mini Racers'
    }
  },
  {
    path: '/contents/class-c',
    name: 'Class-C',
    component: ClassC, 
    meta: {
      title: 'Class-C - Mini Racers'
    }
  },
  {
    path: '/contents/class-d',
    name: 'Class-D',
    component: ClassD, 
    meta: {
      title: 'Class-D - Mini Racers'
    }
  },
  {
    path: '/contents/class-e',
    name: 'Class-E',
    component: ClassE, 
    meta: {
      title: 'Class-E - Mini Racers'
    }
  },
  {
    path: '/contents/class-extra',
    name: 'Class-Extra',
    component: ClassExtra, 
    meta: {
      title: 'Class-Extra - Mini Racers'
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
