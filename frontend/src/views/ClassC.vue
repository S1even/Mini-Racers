<template>
    <div class="ClassC">
        <Navbar />
        <h2 class="title">Class C:</h2>
        <Cars
            :cars="ClassCCars"
            backgroundColor="#FFFDD0"
            reverseBackgroundColor="#ADD8E6"
        />
        <Pagination prevLink="/contents/class-b" nextLink="/contents/class-d" />
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

import Encelado from "@/assets/Photo-Mini-Racers/ClassC/Encelado.png";
import Europa from "@/assets/Photo-Mini-Racers/ClassC/Europa.png";
import Mercurio from "@/assets/Photo-Mini-Racers/ClassC/Mercurio.png";
import Pictoris from "@/assets/Photo-Mini-Racers/ClassC/Pictoris.png";
import Rhea from "@/assets/Photo-Mini-Racers/ClassC/Rhea.png";

const ClassCCars = ref([
    {
        name: "Encelado",
        image: Encelado,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Europa",
        image: Europa,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Mercurio",
        image: Mercurio,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Pictoris",
        image: Pictoris,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Rhea",
        image: Rhea,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
]);
</script>

<style scoped>
.ClassC {
  height: 100vh;
  background-image: url('@/assets/ClassC.png');
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