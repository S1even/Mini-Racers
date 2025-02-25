<template>
  <div class="ClassA">
    <Navbar />
    <h2 class="title">Class A:</h2>
    <Cars 
      :cars="ClassACars"
      backgroundColor="#87ceeb"
      reverseBackgroundColor="#98fb98"
    />
    <div class="container-pn">
      <a href="/content" class="button-pn">Previous</a>
      <a href="/content/class-b" class="button-pn">Next</a>
    </div>
  </div>
  <Footer />
</template>

<script>
import SkylineImage from "@/assets/cars/Skyline.png";

import Navbar from '@/components/navbar.vue';
import Cars from '@/components/CarsView.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'ClassA',
  components: {
    Navbar,
    Cars,
    Footer,
  },
  data() {
    return {
      ClassACars: [
        {
          name: "Skyline",
          image: SkylineImage,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          name: "Skyline",
          image: SkylineImage,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ClassA {
  height: 100vh;
  background-image: url('@/assets/Class/Class-A.png');
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

.container-pn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.button-pn {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #d67d91;
  color: white;
  text-decoration: none;
  text-align: center;
}

@media (max-width: 600px) {
  .container-pn {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .button-pn {
    width: 80%;
  }
}
</style>