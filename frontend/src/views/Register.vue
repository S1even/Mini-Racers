<template>
  <div class="home-page">
    <Navbar />
    <Register :username="username" :email="email" :password="password" :confirmpassword="confirmpassword"
      :errorMessage="errorMessage" @update:username="username = $event" @update:email="email = $event"
      @update:password="password = $event" @update:confirmpassword="confirmpassword = $event"
      @submit="handleRegister" />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue';
import Register from '@/components/registcard.vue';
import Footer from '@/components/footer.vue';
import { register } from '../../stores/authService';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/authStore';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmpassword = ref('');
const errorMessage = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleRegister = async () => {
  const credentials = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmpassword: confirmpassword.value
  };

  console.log('Données envoyées au backend:', credentials);

  try {
    await register(credentials, authStore, router);
    console.log('Register Sucessfull');

    alert('Register completed!');
    router.push('/login');
  } catch (error) {
    errorMessage.value = error.message;
    console.error('Error during registration:', error);
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
