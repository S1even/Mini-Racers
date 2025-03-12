<template>
    <div class="ClassD">
        <Navbar />
        <h2 class="title">Class D:</h2>
        <Cars
            :cars="ClassDCars"
            backgroundColor="#FFFACD"
            reverseBackgroundColor="#D3D3D3"
        />
        <Pagination prevLink="/contents/class-c" nextLink="/contents/class-e" />
    </div>
    <div>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue';
import Cars from '@/components/CarView.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/footer.vue';

import Halley from "@/assets/Photo-Mini-Racers/ClassD/Halley.png";
import Luna from "@/assets/Photo-Mini-Racers/ClassD/Luna.png";
import Pluton from "@/assets/Photo-Mini-Racers/ClassD/Pluton.png";
import Sirius from "@/assets/Photo-Mini-Racers/ClassD/Sirius.png";
import Supernova from "@/assets/Photo-Mini-Racers/ClassD/Supernova.png";

const ClassDCars = ref([
    {
        name: "Halley",
        image: Halley,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Luna",
        image: Luna,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Pluton",
        image: Pluton,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Sirius",
        image: Sirius,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Supernova",
        image: Supernova,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
]);
</script>

<style scoped>
.ClassD {
  height: 100vh;
  background-image: url('@/assets/ClassD.png');
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