<template>
    <div class="home-page">
        <Navbar />
    </div>
    <div>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
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