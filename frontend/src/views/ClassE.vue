<template>
    <div class="ClassE">
        <Navbar />
        <h2 class="title">Class E:</h2>
        <Cars
            :cars="ClassECars"
            backgroundColor="#FFE6FA"
            reverseBackgroundColor="#E0EEE0"
        />
        <Pagination prevLink="/contents/class-d" nextLink="/contents/class-extra" />
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

import Florence from "@/assets/Photo-Mini-Racers/ClassE/Florence-3122.png";
import Markab from "@/assets/Photo-Mini-Racers/ClassE/Markab.png";
import Orion from "@/assets/Photo-Mini-Racers/ClassE/Orion.png";
import Scheat from "@/assets/Photo-Mini-Racers/ClassE/Scheat.png";
import Tethys from "@/assets/Photo-Mini-Racers/ClassE/Tethys.png";

const ClassECars = ref([
    {
        name: "Florence-3122",
        image: Florence,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Markab",
        image: Markab,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Orion",
        image: Orion,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Scheat",
        image: Scheat,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Tethys",
        image: Tethys,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
]);
</script>

<style scoped>
.ClassE {
  height: 100vh;
  background-image: url('@/assets/ClassE.png');
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