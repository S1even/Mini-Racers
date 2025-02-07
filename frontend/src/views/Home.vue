<template>
  <div class="home-page">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
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
