<template>
    <div class="page-container">
        <Navbar class="transparent-navbar" />
        <div class="homepage">
            <div class="text-container">
                <p :class="{ 'card-text': true, 'fade-in': true, 'show': isFirstTextMounted }">
                    Here is the team of developers who worked on this project, which meant a lot to all of us. When we
                    started in December, it was just ideas in our heads, and today, here is the result. Thank you to
                    everyone who downloads the game and has fun with it!
                </p>
            </div>
            <div ref="cardsContainer" class="cards-container">
                <pub v-for="(person, index) in people.slice(0, 4)" :key="index" :name="person.name" :role="person.role"
                    :photo="person.photo" :github="person.github" :linkedin="person.linkedin"
                    :class="{ 'fade-in': true, 'show': isFirstCardsMounted }" />
            </div>
            <div class="last-card-container">
                <p :class="{ 'last-card-text': true, 'fade-in': true, 'show': isSecondTextMounted }">
                    Un grand merci à Yannis pour avoir contribué au projet en nous concoctant une musique pour nos
                    circuits.
                </p>
            </div>
            <div class="last-card-container">
                <pub :name="people[4].name" :role="people[4].role" :photo="people[4].photo" :github="people[4].github"
                    :linkedin="people[4].linkedin" :class="{ 'fade-in': true, 'show': isLastCardMounted }" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
import pub from '@/components/pub.vue';
import { ref, onMounted } from 'vue';

const people = [
    { name: 'Steven', role: 'Game Developper & Map Designer', photo: 'steven', github: 'https://github.com/S1even', linkedin: 'https://www.linkedin.com/in/steven-devin-107849246/' },
    { name: 'Morgan', role: 'Developper fullstack & Map Designer', photo: 'morgan', github: 'https://github.com/Morg92b', linkedin: 'https://www.linkedin.com/in/morgan-bouaziz-50a2811b6/' },
    { name: 'Scotty', role: 'Game Developper', photo: 'scotty', github: 'https://github.com/scotty800', linkedin: 'https://www.linkedin.com/in/scotty-ndanga-5a24aa1b0/' },
    { name: 'Dylan', role: 'Developper front-end', photo: 'scotty', github: 'https://github.com/Bruqui', linkedin: 'https://www.linkedin.com/in/dylan-gros-desormeaux-a24044348/' },
    { name: 'Yannis', role: 'Developper', photo: 'yannis', github: 'https://github.com/Yannis95200', linkedin: 'https://www.linkedin.com/in/yannis-ranguin-9798aa192/' }
];

// Variables pour contrôler l'apparition des éléments
const isFirstTextMounted = ref(false);
const isFirstCardsMounted = ref(false);
const isSecondTextMounted = ref(false);
const isLastCardMounted = ref(false);

onMounted(() => {
    setTimeout(() => {
        isFirstTextMounted.value = true;
    }, 100);

    setTimeout(() => {
        isFirstCardsMounted.value = true;
    }, 600);

    setTimeout(() => {
        isSecondTextMounted.value = true;
    }, 1000);

    setTimeout(() => {
        isLastCardMounted.value = true;
    }, 1400);
});
</script>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.homepage {
    flex: 1;
    background-color: #153c75;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.text-container {
    width: 100%;
    max-width: 800px;
    margin-top: 50px;
    margin-bottom: 70px;
}

.card-text {
    color: white;
    font-size: 1.2em;
    text-align: center;
    margin: 0 auto;
}

.cards-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: -20px;
}

.last-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.last-card-text {
    color: white;
    font-size: 1.2em;
    text-align: center;
    max-width: 600px;
    margin: 2 auto;
}

.transparent-navbar {
    background-color: transparent !important;
    box-shadow: none !important;
}

/* Animation d'apparition en fondu */
.fade-in {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.fade-in.show {
    opacity: 1;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .cards-container {
        gap: 15px;
    }

    .card-text,
    .last-card-text {
        font-size: 1.1em;
    }
}

@media (max-width: 768px) {
    .page-container {
        height: 185vh;
    }

    .homepage {
        padding: 10px;
    }

    .text-container {
        margin-top: 30px;
        margin-bottom: 40px;
    }

    .cards-container {
        flex-direction: column;
        gap: 10px;
    }

    .card-text,
    .last-card-text {
        font-size: 1em;
    }

    .last-card-container {
        margin-top: 15px;
    }
}

@media (max-width: 480px) {

    .card-text,
    .last-card-text {
        font-size: 0.9em;
    }

    .cards-container {
        gap: 8px;
    }
}

@media (max-width: 385px) {
    .page-container {
        height: 190vh;
    }
}
</style>