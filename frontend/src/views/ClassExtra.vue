<template>
    <div class="ClassExtra">
        <Navbar />
        <h2 class="title">Class Extra:</h2>
        <Cars
            :cars="ClassExtraCars"
            backgroundColor="#FFF5EE"
            reverseBackgroundColor="#E6E6FA"
        />
        <Pagination prevLink="/contents/class-e" nextLink="/contents" />
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

import Nessus from "@/assets/Photo-Mini-Racers/ClassExtra/Nessus.png";
import Palma from "@/assets/Photo-Mini-Racers/ClassExtra/Palma-372.png";
import Quaoar from "@/assets/Photo-Mini-Racers/ClassExtra/Quaoar.png";
import Talos from "@/assets/Photo-Mini-Racers/ClassExtra/Talos.png";
import Ursula from "@/assets/Photo-Mini-Racers/ClassExtra/Ursula-375.png";

const ClassExtraCars = ref([
    {
        name: "Nessus",
        image: Nessus,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Palma-372",
        image: Palma,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Quaoar",
        image: Quaoar,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Talos",
        image: Talos,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Ursula-375",
        image: Ursula,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
]);
</script>

<style scoped>
.ClassExtra {
  height: 100vh;
  background-image: url('@/assets/ClassExtra.png');
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