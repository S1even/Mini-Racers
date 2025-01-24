import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';
    next();
  })