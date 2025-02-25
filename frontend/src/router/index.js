import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '@/views/Home.vue';
import Content from '@/views/Content.vue';
import About from '@/views/About.vue';
import ClassA from '@/views/ClassA.vue';
import ClassB from '@/views/ClassB.vue';
import ClassC from '@/views/ClassC.vue';
import ClassD from '@/views/ClassD.vue';
import ClassE from '@/views/ClassE.vue';
import ClassExtra from '@/views/ClassExtra.vue';

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
  {
    path: '/content',
    name: 'Content',
    component: Content,
    meta: {
      title: 'Content - Mini Racers'
    }
  },
  {
    path: '/content/class-a',
    name: 'ClassA',
    component: ClassA,
    meta: { title: 'Class A - Mini Racers' }
  },
  {
    path: '/content/class-b',
    name: 'ClassB',
    component: ClassB,
    meta: { title: 'Class B - Mini Racers' }
  },
  {
    path: '/content/class-c',
    name: 'ClassC',
    component: ClassC,
    meta: { title: 'Class C - Mini Racers' }
  },
  {
    path: '/content/class-d',
    name: 'ClassD',
    component: ClassD,
    meta: { title: 'Class D - Mini Racers' }
  },
  {
    path: '/content/class-e',
    name: 'ClassE',
    component: ClassE,
    meta: { title: 'Class E - Mini Racers' }
  },
  {
    path: '/content/class-extra',
    name: 'ClassExtra',
    component: ClassExtra,
    meta: { title: 'Class Extra - Mini Racers' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About - Mini Racers' }
  },
  // Autres routes ici
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
