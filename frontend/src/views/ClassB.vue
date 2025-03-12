<template>
    <div class="ClassB">
        <Navbar />
        <h2 class="title">Class B:</h2>
        <Cars
            :cars="ClassBCars"
            backgroundColor="#F5F5DC"
            reverseBackgroundColor="#FFE4E1"
        />
        <Pagination prevLink="/contents/class-a" nextLink="/contents/class-c" />
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

import Earth from "@/assets/Photo-Mini-Racers/ClassB/Earth.png";
import Eridanus from "@/assets/Photo-Mini-Racers/ClassB/Eridanus.png";
import Nyx from "@/assets/Photo-Mini-Racers/ClassB/Nyx.png";
import Set from "@/assets/Photo-Mini-Racers/ClassB/Set.png";
import Suby from "@/assets/Photo-Mini-Racers/ClassB/Suby.png";

const ClassBCars = ref([
    {
        name: "Earth",
        image: Earth,
        description: "The Earth is a robust and reliable Class B car, designed to tackle all types of track. Its sober, efficient design conceals a powerful engine and well-balanced handling. It's ideal for drivers looking for a versatile car capable of adapting to any situation. The Earth is a sure bet for spirited racing and a wide variety of challenges.",
    },
    {
        name: "Eridanus",
        image: Eridanus,
        description: "The Eridanus is a monster of raw power, a dark black muscle car that evokes the quiet strength of the stars. Its classic, intimidating design hides a super-powerful engine, capable of propelling this beast to dizzying speeds. Its dark allure and deep rumble make it a formidable car, perfect for drivers who like to dominate the road with uncompromising power.",
    },
    {
        name: "Nyx",
        image: Nyx,
        description: "The Nyx is an elegant, high-performance sports car designed for drivers who love speed and style. Its distinctive two-tone design, with white bodywork and yellow and blue accents, gives it a unique, modern look. Its powerful engine and precise handling make it an agile and responsive car, capable of dominating the most demanding circuits. The Nyx is the ideal choice for drivers looking for a car that combines performance and elegance.",
    },
    {
        name: "Set",
        image: Set,
        description: "The Set is a beast of raw power, a bright yellow muscle car with aggressive black stripes, inspired by the Egyptian god of the desert. Its muscular, intimidating design hides a super-powerful engine, capable of propelling this car to dizzying speeds. Its aggressive looks and deep rumble make it a formidable car, perfect for drivers who like to dominate the road with uncompromising power.",
    },
    {
        name: "Suby",
        image: Suby,
        description: "The Suby is a compact, agile sports car designed for drivers who love thrills. Its sleek, sporty design conceals a responsive engine and precise handling. It's ideal for drivers looking for a fun-to-drive car capable of dominating twisty circuits and urban races. The Suby is a versatile car, perfect for drivers who like to vary their pleasures.",
    },
]);
</script>

<style scoped>
.ClassB {
  height: 100vh;
  background-image: url('@/assets/ClassB.png');
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