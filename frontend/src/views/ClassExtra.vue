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
        description: "The Nessus is a rugged, versatile tow truck designed for drivers who enjoy challenges and unexpected situations. Its recovery truck-inspired design, with beige bodywork and specific equipment, gives it a unique, functional look. Its powerful engine and robust suspension make it capable of towing other vehicles and overcoming all obstacles, perfect for off-road racing and extreme challenges. The Nessus is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Palma-372",
        image: Palma,
        description: "The Palma is a rugged, versatile fire truck designed for drivers who love challenges and emergency situations. Its firetruck-inspired design, with red bodywork and special equipment, gives it a unique, functional look. Its powerful engine and robust suspension make it a car capable of overcoming any obstacle, perfect for off-road racing and extreme challenges. The Palma is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Quaoar",
        image: Quaoar,
        description: "The Quaoar is a fast, versatile ambulance designed for drivers who love challenges and emergency situations. Its emergency vehicle-inspired design, with its white bodywork and specific equipment, gives it a unique, functional look. Its responsive engine and robust suspension make it a car capable of intervening quickly and overcoming all obstacles, perfect for races against the clock and extreme challenges. The Quaoar is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Talos",
        image: Talos,
        description: "The Talos is a rugged, secure armored van designed for drivers who enjoy challenges and high-risk situations. Its design, inspired by cash-in-transit vehicles, with its armored body and specific equipment, gives it a unique and intimidating allure. Its powerful engine and reinforced suspension make it a car capable of withstanding all shocks and overcoming all obstacles, perfect for high-risk racing and extreme challenges. The Talos is a versatile car, ideal for drivers who like to vary their pleasures.",
    },
    {
        name: "Ursula-375",
        image: Ursula,
        description: "The Ursula is a robust, versatile forklift designed for drivers who enjoy challenges and atypical situations. Its industrial forklift-inspired design, with its yellow bodywork and specific equipment, gives it a unique, functional look. Its simple engine and precise handling make it a car capable of carrying loads and overcoming obstacles, perfect for atypical races and original challenges. The Ursula is a versatile car, ideal for drivers who like to vary their pleasures.",
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