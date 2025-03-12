<template>
    <div class="ClassA">
        <Navbar />
        <h2 class="title">Class A:</h2>
        <Cars
            :cars="ClassACars"
            backgroundColor="#87ceeb"
            reverseBackgroundColor="#98fb98"
        />
        <Pagination prevLink="/contents" nextLink="/contents/class-b" />
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

import Arion from "@/assets/Photo-Mini-Racers/ClassA/Arion.png";
import Cerbero from "@/assets/Photo-Mini-Racers/ClassA/Cerbero.png";
import Mirach from "@/assets/Photo-Mini-Racers/ClassA/Mirach.png";
import Pegaso from "@/assets/Photo-Mini-Racers/ClassA/Pegaso.png";
import Phaethon from "@/assets/Photo-Mini-Racers/ClassA/Phaethon.png";

const ClassACars = ref([
    {
        name: "Arion",
        image: Arion,
        description: "Built for speed, the Arion is a racing beast with aggressive looks and razor-sharp aerodynamics. With its overpowering engine and XXL spoiler, it devours corners and propels its driver to victory. Its blistering acceleration makes it a formidable weapon on technical circuits, while its exceptional grip enables controlled drifts at high speed.",
    },
    {
        name: "Cerbero",
        image: Cerbero,
        description: "An indomitable beast, built to dominate the asphalt. The Cerbero is a hypercar with a stealthy design and blade-sharp aerodynamics. Its supercharged engine unleashes brutal power, while its ultra-precise handling lets you negotiate every bend at breakneck speed.",
    },
    {
        name: "Mirach",
        image: Mirach,
        description: "The Mirach is a pure marvel of engineering, designed for the most demanding circuits. With its bold aerodynamic design and vibrant red color, it's sure to catch the eye. Its oversized rear wing ensures exceptional grip, even in the tightest corners, while its super-powered engine enables it to reach dizzying speeds in no time.",
    },
    {
        name: "Pegaso",
        image: Pegaso,
        description: "The Pegaso is a concentrate of technology and speed, designed to dominate high-speed circuits. Inspired by Formula 1 single-seaters, it offers an intense and exhilarating racing experience. Its aerodynamic design, streamlined front spoiler and imposing rear spoiler give it exceptional grip and rock-solid stability. Its super-powerful engine enables it to reach stratospheric speeds in a flash.",
    },
    {
        name: "Phaethon",
        image: Phaethon,
        description: "Phaethon embodies raw power and dark elegance. Its name, inspired by the son of Helios who defied the gods, reflects its indomitable temperament. With its violet metallic bodywork, aggressive lines and imposing spoiler, it doesn't go unnoticed. Its roaring engine, like a rumbling storm, announces its devastating power. The Phaethon is designed for drivers who fear nothing and want to dominate the track with implacable force.",
    },
]);
</script>

<style scoped>
.ClassA {
  height: 100vh;
  background-image: url('@/assets/ClassA.png');
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