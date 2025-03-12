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
        description: "The Halley is a fun, quirky buggy designed for fun-loving drivers who like to explore. Its unique, colorful design, with its candy-pink bodywork, gives it an original and endearing allure. Its simple engine and easy handling make it a pleasure to drive, perfect for relaxed races and challenges with friends. The Halley is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Luna",
        image: Luna,
        description: "The Luna is a compact, agile car designed for drivers who like simplicity and efficiency. Its sleek, modern design, with its white bodywork and discreet lines, gives it a unique, timeless allure. Its simple engine and easy handling make it a pleasure to drive, perfect for relaxed races and challenges with friends. The Luna is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Pluton",
        image: Pluton,
        description: "The Pluton is a nimble, economical little city car, designed for riders who like to zip around town. Its compact, colorful design, with red bodywork and white roof, gives it a friendly, practical look. Its simple engine and easy handling make it a pleasure to drive, perfect for relaxed races and challenges with friends. The Pluton is a versatile car, ideal for drivers who like to vary the pleasures.",
    },
    {
        name: "Sirius",
        image: Sirius,
        description: "The Sirius is a compact, sporty car designed for drivers who love speed and handling. Its dynamic, colorful design, with bright green bodywork and black accents, gives it a unique, modern look. Its responsive engine and precise handling make it a pleasure to drive, capable of dominating winding circuits and urban races. The Sirius is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Supernova",
        image: Supernova,
        description: "The Supernova is a compact, versatile car designed for drivers who like simplicity and efficiency. Its sober, functional design, with its red bodywork and discreet lines, gives it a timeless allure. Its simple engine and easy handling make it a pleasure to drive, perfect for relaxed races and challenges with friends. The Supernova is a versatile car, ideal for drivers who like to vary the pleasures.",
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