<template>
    <div class="cars" :class="{ reverse: isReversed }" :style="{ backgroundColor: isReversed ? reverseBackgroundColor : backgroundColor }">
        <div class="section-cars" :class="{ reverse: isReversed }">
            <img :src="image" :alt="name" />
            <div class="section-text-cars">
                <h3>{{ name }}</h3>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    image: String,
    description: String,
    isReversed: Boolean,
    backgroundColor: String,
    reverseBackgroundColor: String,
});
</script>

<style scoped>
.cars {
    height: 300px;
    padding: 20px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-cars {
    display: flex;
    width: 80%;
    align-items: center;
    gap: 20px;
}

.section-cars.reverse {
    flex-direction: row-reverse;
}

.cars img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    border: 2px solid white;
}

.section-text-cars {
    flex: 1;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 0 10px;
}
</style>