<template>
  <div class="home-page">
    <Navbar />
    <LoginCard :email="email" :password="password" :errorMessage="errorMessage" @update:email="email = $event"
      @update:password="password = $event" @submit="onSubmit" />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue';
import LoginCard from '@/components/logincard.vue';
import Footer from '@/components/footer.vue';
import { login } from '../../stores/authService';// Importez la méthode login du service d'authentification
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/authStore';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const authStore = useAuthStore();
const router = useRouter();

const onSubmit = async () => {
  const credentials = {
    email: email.value,
    password: password.value
  };

  console.log('Tentative de connexion avec les credentials :', credentials);

  try {
    await login(credentials, authStore, router); // Passez authStore et router comme arguments
    console.log('Connexion réussie');
  } catch (error) {
    errorMessage.value = error.message;
    console.error('Erreur lors de la tentative de connexion :', error);
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
