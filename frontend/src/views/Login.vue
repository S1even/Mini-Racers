<template>
  <div class="home-page">
    <Navbar />
    <LoginCard :email="email" :password="password" :errorMessage="errorMessage" @update:email="email = $event"
      @update:password="password = $event" @submit="handleLogin" />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue';
import axios from 'axios';
import LoginCard from '@/components/logincard.vue';
import Footer from '@/components/footer.vue';
import router from '@/router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = async (credentials) => {
  try {
    console.log('Données envoyées au backend:', credentials); // Log pour vérifier les données

    const response = await axios.post('http://localhost:5500/api/auth/login', credentials);

    console.log('Réponse du backend:', response.data); // Log pour vérifier la réponse du backend

    alert('Connexion réussie !');
    console.log(response.data);
    router.push('/');
  } catch (error) {
    console.error('Erreur lors de la connexion:', error); // Log pour vérifier l'erreur
    if (error.response) {
      // Utiliser le message d'erreur renvoyé par le backend
      errorMessage.value = error.response.data.message || "Une erreur est survenue. Veuillez réessayer";
    }
  };
}
</script>

<style scoped>
.home-page {
  height: 100vh;
  background-image: url('@/assets/Designer2.png');
  background-size: cover;
  background-position: center;
  background-color: #ffff;
}
</style>
