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
        description: "The Encelado is a compact, easy-to-handle sports car designed for drivers who love a challenge. Its sober, elegant design conceals a well-balanced engine and precise handling. It's ideal for drivers looking for a reliable, easy-to-drive car capable of dominating winding circuits and urban races. The Encelado is a versatile car, perfect for drivers who like to vary their pleasures.",
    },
    {
        name: "Europa",
        image: Europa,
        description: "The Europa is a compact, dynamic sports car designed for drivers who love speed and handling. Its sporty, elegant design conceals a responsive engine and precise handling. It's ideal for drivers looking for a fun-to-drive car capable of dominating twisty circuits and urban races. The Europa is a versatile car, perfect for drivers who like to vary their pleasures.",
    },
    {
        name: "Mercurio",
        image: Mercurio,
        description: "The Mercurio is a compact, lively sports car designed for drivers who love responsiveness and handling. Its sleek, modern design conceals an agile engine and precise handling. It's ideal for drivers looking for a fun-to-drive car capable of dominating twisty circuits and urban races. The Mercurio is a versatile car, perfect for drivers who like to vary their pleasures.",
    },
    {
        name: "Pictoris",
        image: Pictoris,
        description: "The Pictoris is a classic, elegant sports car designed for drivers who love style and performance. Its design, inspired by the racing cars of the 60s, with its light blue bodywork and orange stripes, gives it a unique and timeless allure. Its well-balanced engine and precise handling make it a pleasure to drive, capable of dominating winding circuits and urban races. The Pictoris is a versatile car, perfect for drivers who like to vary their pleasures.",
    },
    {
        name: "Rhea",
        image: Rhea,
        description: "The Rhea is an elegant, high-performance sports car designed for drivers who love speed and style. Its sleek, modern design, with its bright yellow bodywork, gives it a unique, timeless allure. Its well-balanced engine and precise handling make it a pleasure to drive, capable of dominating winding circuits and urban races. The Rhea is a versatile car, perfect for drivers who like to vary their pleasures.",
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