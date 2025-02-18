<template>
    <div class="Homepage">
        <Navbar />
        <Class />
    </div>
</template>

<script>
import Class from '@/components/class.vue';
import Navbar from '@/components/navbar.vue';

export default {
    name: 'Contents',
    components: {
        Navbar,
        Class,
    },
};


</script>

<style scoped>
.Homepage {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-color: #153c75;
}
</style>