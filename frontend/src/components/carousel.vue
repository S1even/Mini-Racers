<template>
    <div class="carousel">
        <img :src="images[currentIndex]" loading="lazy" class="carousel-image" alt="carousel image" />
        <div class="indicators">
            <span v-for="(image, index) in images" :key="index" class="indicator"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import img1 from "@/assets/Turnofcity/speed1.png";
import img2 from "@/assets/Turnofcity/speed2.png";
import img3 from "@/assets/Turnofcity/speed3.png";
import img4 from "@/assets/Turnofcity/speed4.png";
import img5 from "@/assets/Turnofcity/turn1.jpg";
import img6 from "@/assets/Turnofcity/turn2.jpg";
import img7 from "@/assets/Turnofcity/turn3.jpg";
import img8 from "@/assets/Turnofcity/turn4.jpg";
import img9 from "@/assets/Turnofcity/turn5.jpg";
import img10 from "@/assets/Turnofcity/turn6.jpg";


const images = ref([img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]);
const currentIndex = ref(0);
let interval = null;

const goToSlide = (index) => {
    currentIndex.value = index;
    resetInterval();
};

const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }, 3000);
};

onMounted(() => {
    resetInterval();
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.carousel {
    width: 500px;
    height: 275px;
    overflow: hidden;
    display: flex;
    top: -400px;
    left: 590px;
    justify-content: center;
    align-items: center;
    background: #000;
    border-radius: 7px;
    position: relative;
}

.carousel-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 7px;
}


/* INDICATEURS */
.indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
}

.indicator {
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 0.3s, transform 0.3s;
    cursor: pointer;
}

.indicator.active {
    opacity: 1;
    transform: scale(1.2);
}
</style>