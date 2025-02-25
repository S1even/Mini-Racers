<template>
    <div class="About">
        <Navbar />
        <h1 class="title">Mini Racers team:</h1>
        <Team />
        <h1 class="title">Thanks to:</h1>
        <div class="container team">
        <div class="profile">
            <img src="../assets/team/test.jpg" alt="Photo Yanis">
            <h3>Yanis</h3>
            <p>Music</p>
            <a href="https://github.com/Yannis95200" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/yannis-ranguin-9798aa192/" target="_blank">LinkedIn</a>
        </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Team from '@/components/team.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Team,
    Footer,
  },
};
</script>

<style>
.About {
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