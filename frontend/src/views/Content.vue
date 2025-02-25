<template>
    <div class="home-page">
        <Navbar />
        <div class="about">
            <h1 id="circuit" class="title">Maps:</h1>
            <MapsSection />
            <h1 id="cars" class="title">Cars:</h1>
            <ClassCar />
        </div>
        <br>
        <br>
        <br>
      <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
import MapsSection from '@/components/maps-section.vue'
import ClassCar from '@/components/classcar.vue'

export default {
  name: 'Content',
  components: {
    Navbar,
    Footer,
    MapsSection,
    ClassCar,
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
  font-family: Arial, sans-serif;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;
}

.title {
    display: flex;
    justify-content: center;
    color: white;
}
</style>