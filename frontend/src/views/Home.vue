<template>
  <div class="home-page">
    <Navbar />
    <div class="card-container">
      <Carte v-for="(carte, index) in cartes" :title="carte.carteName" :description="carte.carteDescription"
        :image="carte.image" :key="index" :class="'cartes-' + index + ' fade-in' + (isMounted ? ' show' : '')" />
    </div>
    <Download :isAuthenticated="isLoggedIn"
      fileUrl="https://drive.google.com/file/d/1fzopuzASCf8w8fmP3QZxRFM0wFRSqxVA/view?usp=sharing" />
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Carte from '@/components/carte.vue';
import Download from '@/components/download.vue';
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';

const isLoggedIn = ref(localStorage.getItem("userToken") !== null);
const isMounted = ref(false);

const cartes = [
  {
    carteName: 'Speed Moutain',
    carteDescription: "A track designed by Steven, featuring a well-crafted circuit with expertly engineered turns. Speed won't scare you on this course, where every corner is built to challenge thrill-seekers. Get ready for an exhilarating experience!",
    image: 'mapsteven',
  },
  {
    carteName: 'Turn Of City',
    carteDescription: "A fun track designed by Morgan, featuring a whirlwind of unexpected turns and thrilling surprises. This circuit blends adrenaline and excitement at every moment, offering a wild ride that will delight thrill-seekers and lovers of the unexpected. Get ready for a crazy and exhilarating challenge !",
    image: 'mapmorgan',
  },
];

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true;
  }, 250);
});
</script>

<style scoped>
.home-page {
  height: 100vh;
  background-image: url('@/assets/Designer2.png');
  background-size: cover;
  background-position: center;
  background-color: #000;
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  margin-left: 15vh;
  margin-right: 15vh;
  gap: 20px;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-top: 10vh;
  }
}

/* Animation d'apparition en fondu */
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.show {
  opacity: 1;
}
</style>