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
            <TransitionGroup name="fade" tag="div" class="card-wrapper">
                <Class v-for="(card, index) in displayedCards" :className="card.className" :image="card.image"
                    :key="index" :class="'cards-' + index" />
            </TransitionGroup>
        </div>
        <p>The cars have been carefully selected by our expert, Steven. Each vehicle has been configured to ensure
            fairness in every class.</p>
    </div>
    <div class="Mappage">
        <h1 class="textclass">LIST OF MAPS</h1>
        <textcarousel class="text-container" />
        <div class="carte-container">
            <Carte v-for="(carte, index) in cartes" :title="carte.carteName" :description="carte.carteDescription"
                :image="carte.image" :key="index" :class="'cartes-' + index" />
        </div>
        <div>
            <carousel class="carousel-container" />
        </div>
    </div>
    <div>
        <Footer />
    </div>
</template>

<script setup>
import Carte from '@/components/carte.vue';
import Class from '@/components/classA.vue';
import Navbar from '@/components/navbar.vue';
import carousel from '@/components/carousel.vue';
import Footer from '@/components/footer.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import textcarousel from '@/components/textcarousel.vue';

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

const cartes = [
    {
        carteName: 'Speed Mountain',
        carteDescription: "A track designed by Steven, featuring a well-crafted circuit with expertly engineered turns. Speed won't scare you on this course, where every corner is built to challenge thrill-seekers. Get ready for an exhilarating experience!",
        image: 'mapsteven',
    },
    {
        carteName: 'Turn Of City',
        carteDescription: "A fun track designed by Morgan, featuring a whirlwind of unexpected turns and thrilling surprises. This circuit blends adrenaline and excitement at every moment, offering a wild ride that will delight thrill-seekers and lovers of the unexpected. Get ready for a crazy and exhilarating challenge!",
        image: 'mapmorgan',
    },
];

const displayedCards = ref([]);

onMounted(() => {
    displayedCards.value = [];
    cards.forEach((card, index) => {
        setTimeout(() => {
            displayedCards.value.push(card);
        }, index * 400);
    });
});
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
    color: #fff;
}

.textclass {
    padding: 0;
    margin: 0;
    text-align: center;
    color: #fff;
    position: relative;
    top: 15px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    /* Ajustez cette valeur pour plus ou moins d'espacement */
    max-width: 800px;
    /* Augmentez la largeur totale si nécessaire */
    margin: auto;
    padding-top: 50px;
}

.card-wrapper {
    display: contents;
}

.Mappage {
    background-color: #f8b05d;
    background-size: cover;
    background-position: center;
    height: 80vh;
    position: relative;
    overflow: hidden;
}

.carte-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 250px;
    /* Ajuster l'espacement */
    max-width: 80%;
    /* Largeur maximale pour s'adapter à l'écran */
    margin: 90px auto -210px;
    padding-top: 35px;
    /* Ajouté pour éviter le débordement */
}

.carousel-container {
    position: relative;
    margin: auto;
    left: 25%;
    /* Largeur maximale pour s'adapter à l'écran */
}

.text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 60px;
    padding-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease-in-out, transform 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

/* Réactivité */
@media (max-width: 1079px) {
    .carousel-container {
        margin-top: 750px;
        /* Ajuste la marge supérieure pour s'assurer qu'il se place bien en dessous des cartes */
        left: 0;
        right: 0;
    }

    .Mappage {
        height: 130vh;
    }

    .carte-container {
        gap: 50px;
    }

    .text-container {
        align-items: center;
    }
}


@media (max-width: 775px) {
    .card-container {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 5px;
        margin-top: 50px;
    }

    .carte-container {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: 55px;
        padding: 10px;
    }

    .carte {
        width: 100%;
    }

    .Class {
        width: 100%;
    }

    .carousel-container {
        left: 0px;
        margin-top: 450px;
    }

    .Homepage {
        height: 70vh;
    }

    .Mappage {
        height: 155vh;
    }
}

@media (max-width: 480px) {
    .textheader {
        font-size: 2rem;
    }

    .Homepage {
        height: auto;
    }

    .textclass {
        top: 10px;
    }

    .card-container {
        gap: 5px;
    }

    .carte-container {
        margin-left: 5vh;
        margin-right: 5vh;
    }

    .carousel-container {
        margin: 10px 0;
        width: 100%;
    }
}

@media (max-width: 430px) {
    .textheader {
        font-size: 2rem;
    }

    .Homepage {
        height: auto;
    }

    .textclass {
        top: 10px;
    }

    .card-container {
        gap: 5px;
    }

    .carte-container {
        margin-left: 5vh;
        margin-right: 5vh;
    }

    .carousel-container {
        max-width: 98%;
        max-height: 235px;
        margin-top: 450px;
    }

    .Mappage {
        height: 200vh;
    }
}

@media (max-width:390px) {
    .Mappage {
        height: 225vh;
    }
}

@media (max-width:829px) {
    .Mappage {
        height: 150vh;
    }
}

@media (max-width:648px) {
    .Mappage {
        height: 160vh;
    }
}
</style>