<template>
    <div class="imageheader">
        <Navbar />
        <div class="textheader">
            <h1>WELCOME IN DA CLUB</h1>
        </div>
    </div>
    <div class="Homepage">
        <h1 class="textclass">LIST OF CARS</h1>
        <div class="card-container">
            <Class v-for="(card, index) in cards" :className="card.className" :image="card.image" :key="index"
                :class="'cards-' + index" />
        </div>
        <p>The cars have been carefully selected by our expert, Steven. Each vehicle has been configured to ensure
            fairness in every class.</p>
    </div>
    <div class="Mappage">
        <h1 class="textclass">LIST OF MAPS</h1>
        <Carte layoutclass="column-layout" />
        <carousel />
    </div>
</template>

<script setup>
import Carte from '@/components/carte.vue';
import Class from '@/components/classA.vue';
import Navbar from '@/components/navbar.vue';
import carousel from '@/components/carousel.vue';

const cards = [
    {
        className: 'Class A',
        image: 'ClassA',
    },
    {
        className: 'Class B',
        image: 'ClassB',
    },
    {
        className: 'Class C',
        image: 'Classcmenu',
    },
    {
        className: 'Class D',
        image: 'Classd',
    },
    {
        className: 'Class E',
        image: 'ClassE',
    },
    {
        className: 'Class Extra',
        image: 'Extra',
    },
];
</script>

<style scoped>
.imageheader {
    height: 50vh;
    background-image: url('@/assets/Mini.webp');
    background-size: cover;
    background-position: center;
    background-color: #000;
}

.textheader {
    text-align: center;
    color: #0dbcfc;
    font-size: 3rem;
    /* Ajuste la taille */
    font-weight: bold;
    text-shadow:
        0 0 5px #f6ac57,
        0 0 10px #f59eb1,
        0 0 20px #ee93bf,
        0 0 40px #9c61bd;
}

.Homepage {
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-color: #153c75;
}

.Homepage p {
    text-align: center;
    color: #fff
}

.textclass {
    padding: 0;
    margin: 0;
    text-align: center;
    color: #fff;
    position: relative;
    top: 15px
}

.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    /* Ajustez cette valeur pour plus ou moins d'espacement */
    max-width: 900px;
    /* Augmentez la largeur totale si nécessaire */
    margin: auto;
}

.Mappage {
    background-color: #f8b05d;
    background-size: cover;
    background-position: center;
    height: 60vh;

}

.column-layout {
    display: flex;
    flex-direction: column;
    gap: 2px;
    /* Ajustez cette valeur pour contrôler l'espacement vertical */
    margin-left: -200px;
    position: relative;
    top: 55px;
}


@media (max-width: 768px) {
    .card-container {
        flex-direction: column;
    }
}
</style>