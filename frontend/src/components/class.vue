<template>
  <div class="card">
    <img :src="imageSrc" alt="Card image" class="card-image" loading="lazy">
    <div class="card-details">
      <p class="text-title">{{ className }}</p>
    </div>
    <button class="card-button" @click="redirectToPage">More info</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  className: String,
  image: String,
});

const router = useRouter();

const imageSrc = computed(() => {
  return new URL(`../assets/${props.image}.png`, import.meta.url).href;
});

const redirectToPage = () => {
  const routes = {
    ClassA: '/contents/class-a',
    ClassB: '/contents/class-b',
    ClassC: '/contents/class-c',
    ClassD: '/contents/class-d',
    ClassE: '/contents/class-e',
    ClassExtra: '/contents/class-extra',
  };

  const destination = routes[props.image];
  if (destination) {
    router.push(destination);
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 180px;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 0;
  border: 2px solid #54C3EA;
  transition: 0.5s ease-out;
  overflow: visible;
  margin: 10px;
  /* Ajustez les marges ici */
}

.card-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.card-details {
  color: rgb(0, 0, 0);
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(245, 245, 245, 0.5);
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 20px;
  bottom: 0px;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  height: 20%;
  border-radius: 1rem;
  border: none;
  background-color: #d67d91;
  color: #fff;
  font-size: 1rem;
  padding: .3rem 0.6rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  cursor: pointer;
}

.text-title {
  font-size: 1.5em;
  font-weight: bold;
}

.card:hover {
  border-color: #d67d91;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}
</style>
