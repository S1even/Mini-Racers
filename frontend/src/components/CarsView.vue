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
  
<script>
import CarSection from "@/components/CarSection.vue";

export default {
    components: { CarSection },
    props: {
        cars: Array,
        backgroundColor: String,
        reverseBackgroundColor: String,
    },
};

</script>
  
<style>
.CarsSection {
    font-family: Arial, sans-serif;
    text-align: center;
}
</style>
  