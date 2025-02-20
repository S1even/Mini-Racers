<template>
  <div class="home-page">
    <Navbar />
    <Carte />
    <Download />
  </div>
</template>

<script setup>
import Carte from '@/components/carte.vue';
import Download from '@/components/download.vue';
import Navbar from '@/components/navbar.vue';
</script>

<style scoped>
.home-page {
  height: 100vh;
  background-image: url('@/assets/Designer2.png');
  background-size: cover;
  background-position: center;
  background-color: #000;
}
</style>
