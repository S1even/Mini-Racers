import { createApp } from 'vue';
import App from './App.vue'; // Importez App.vue
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';

// Ajouter les icônes à la bibliothèque FontAwesome
library.add(fas);

// Créer l'instance de l'application
const app = createApp(App);

// Enregistrer le composant FontAwesomeIcon globalement
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
// Utiliser le routeur
app.use(router);

// Définir le titre de la page avant chaque navigation
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

// Monter l'application
app.mount('#app');
