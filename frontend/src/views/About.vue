<template>
    <div class="Homepage">
        <Navbar />
        <pub v-for="(person, index) in people" :key="index" :name="person.name" :role="person.role"
            :photo="person.photo" :github="person.github" :linkedin="person.linkedin" />
    </div>
    <div>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
import pub from '@/components/pub.vue'

const people = [
    {
        name: 'Steven',
        role: 'Developper',
        photo: 'steven',
        github: 'https://github.com/S1even',
        linkedin: 'https://www.linkedin.com/in/steven-devin-107849246/',
    },
    {
        name: 'Morgan',
        role: 'Developper',
        photo: 'arthur',
        github: 'https://github.com/S1even',
        linkedin: 'https://www.linkedin.com/in/scotty-ndanga-5a24aa1b0/',
    },

]

</script>

<style scoped>
.Homepage {
    height: 91vh;
    background-size: cover;
    background-position: center;
    background-color: #153c75;
}

.pub-container {
    align-items: center;
    justify-content: center;
}
</style>