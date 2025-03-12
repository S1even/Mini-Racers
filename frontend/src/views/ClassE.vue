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
        description: "The Florence is a charming and endearing vintage car, designed for drivers who love vintage cars and leisurely drives. Its 1920s-inspired design, with black bodywork and spoked wheels, gives it a unique, timeless allure. Its simple engine and easy handling make it a pleasure to drive, perfect for relaxed racing and challenges with friends. The Florence is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Markab",
        image: Markab,
        description: "The Markab is a powerful, imposing monster truck, designed for drivers who love thrills and extreme challenges. Its aggressive, colorful design, with its purple, yellow and white bodywork and oversized wheels, gives it a unique, intimidating allure. Its powerful engine and robust suspension make it a car capable of overcoming any obstacle, perfect for off-road racing and extreme challenges. The Markab is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Orion",
        image: Orion,
        description: "The Orion is a compact, sporty car designed for drivers who love speed and handling. Its sober, elegant design, with gray bodywork and red accents, gives it a unique, timeless allure. Its responsive engine and precise handling make it a pleasure to drive, capable of dominating winding circuits and urban races. The Orion is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Scheat",
        image: Scheat,
        description: "The Scheat is a sturdy, versatile monster truck designed for drivers who love challenges and thrills. Its American pickup-inspired design, with beige bodywork and oversized wheels, gives it a unique, imposing look. Its powerful engine and robust suspension make it a car capable of overcoming any obstacle, perfect for off-road racing and extreme challenges. The Scheat is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Tethys",
        image: Tethys,
        description: "The Tethys is a rugged, versatile off-road SUV designed for drivers who love adventure and challenge. Its design, inspired by classic 4x4s, with its white and grey bodywork and red accents, gives it a unique, imposing look. Its powerful engine and robust suspension make it a car capable of overcoming any obstacle, perfect for off-road racing and extreme challenges. The Tethys is a versatile car, ideal for drivers who like to vary their pleasures.",
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