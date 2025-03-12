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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Cerbero",
        image: Cerbero,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Mirach",
        image: Mirach,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Pegaso",
        image: Pegaso,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Phaethon",
        image: Phaethon,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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