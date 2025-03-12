<template>
    <div class="CarsSection">
        <CarSection
            v-for="(car, index) in cars"
            :key="index"
            :name="car.name"
            :description="car.description"
            :image="car.image"
            :isReversed="index % 2 !== 0"
            :backgroundColor="backgroundColor"
            :reverseBackgroundColor="reverseBackgroundColor"
        />
    </div>
</template>

<script setup>
import CarSection from "@/components/CarSection.vue";
import { defineProps } from "vue";

const props = defineProps({
    cars: Array,
    backgroundColor: String,
    reverseBackgroundColor: String,
});
</script>

<style scoped>
.CarsSection {
    font-family: Arial, sans-serif;
    text-align: center;
}
</style>