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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Eridanus",
        image: Eridanus,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Nyx",
        image: Nyx,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Set",
        image: Set,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        name: "Suby",
        image: Suby,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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