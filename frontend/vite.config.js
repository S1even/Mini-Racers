import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Configuration de Vite pour Vue.js
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(), // Active Vue DevTools (optionnel)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias pour `@`
    },
  },
  server: {
    port: 5173, // Définit le port du serveur de développement
    open: true, // Ouvre automatiquement le navigateur
  },
  define: {
    'process.env': {}  // Ajoute cette ligne pour éviter l'erreur de "process"
  },
})
