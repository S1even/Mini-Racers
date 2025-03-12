<template>
    <div class="Homepage">
        <Navbar />
        <div class="not-found">
            <Error />
            <router-link to="/" class="back-home">Back Home</router-link>
        </div>
        <div class="foot">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Error from '@/components/Error.vue';
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
</script>

<style scoped>
.Homepage {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-color: #153c75;
    display: flex;
    flex-direction: column;

}

.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}

.main_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30em;
    height: 30em;
}

.back-home {
    font-size: 1.5em;
    /* Agrandir le texte */
    padding: 10px 20px;
    /* Ajouter de l'espace autour */
    margin-top: 10px;
    /* Rapprocher du composant Error */
    text-decoration: none;
    background-color: #d67d91;
    /* Couleur de fond */
    color: white;
    /* Couleur du texte */
    border-radius: 5px;
    transition: 0.3s;
}

.back-home:hover {
    background-color: #d67d91;
    /* Effet au survol */
}

.foot {
    margin-top: auto;
    width: 100%;

}

@media (max-width: 768px) {
    .back-home {
        flex-direction: column;
        font-size: 15px;

    }
}

@media (max-width: 557px) {
    .back-home {
        flex-direction: column;
        font-size: 10px;
        margin-bottom: 15px;

    }
}
</style>
