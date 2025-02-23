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
import { useAuthStore } from '../../stores/authStore';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const authStore = useAuthStore();

const handleLogin = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:5500/api/auth/login', credentials);

    if (response.data.username) {
      authStore.login(response.data.username);
      router.push('/'); // Rediriger vers la page d'accueil
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message || "Une erreur est survenue. Veuillez réessayer";
    }
  };
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
