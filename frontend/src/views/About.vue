<template>
    <div class="Homepage">
        <Navbar />

    </div>
    <div>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';

</script>

<style scoped>
.Homepage {
    height: 91vh;
    background-size: cover;
    background-position: center;
    background-color: #153c75;
}
</style>