<template>
  <div class="home-page">
    <Navbar />
    <div class="content">
      <Download />
      <h1 class="title">Contents:</h1>
      <CarsMaps />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
import Download from '@/components/download.vue';
import CarsMaps from '@/components/carmaps.vue';
</script>

<style scoped>
.home-page {
  height: 100vh;
  background-image: url('@/assets/Designer2.png');
  background-size: cover;
  background-position: center;
  background-color: #000;
  font-family: Arial, sans-serif;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.title {
  color: white;
  margin: 50px 0;
  text-align: center;
}
</style>
