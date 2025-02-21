<template>
  <div class="home-page">
    <Navbar />
    <Register :username="username" :email="email" :password="password" :confirmpassword="confirmpassword"
      :errorMessage="errorMessage" @update:email="email = $event" @update:password="password = $event"
      @submit="handleRegister" />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue';
import axios from 'axios';
import Register from '@/components/registcard.vue';
import router from '@/router';
import Footer from '@/components/footer.vue'

const username = ref('');
const email = ref('');
const password = ref('');
const confirmpassword = ref('');
const errorMessage = ref('');

const handleRegister = async (credentials) => {
  try {
    console.log('Données envoyées au backend:', credentials); // Log pour vérifier les données

    const response = await axios.post('http://localhost:5500/api/auth/register', credentials);

    console.log('Réponse du backend:', response.data); // Log pour vérifier la réponse du backend

    alert('Register completed !');
    console.log(response.data);
    router.push('/register');
  } catch (error) {
    console.error('Error during registration', error); // Log pour vérifier l'erreur
    if (error.response) {
      // Utiliser le message d'erreur renvoyé par le backend
      errorMessage.value = error.response.data.message || "An error has occurred. Please try again";
    }
  }
};
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
