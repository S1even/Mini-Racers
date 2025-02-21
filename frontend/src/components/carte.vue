<template>
  <div>
    <div class="card">
      <img :src="imageSrc" alt="Card image" class="card-image" loading="lazy">
      <div class="card__content">
        <p class="card__title">{{ title }}</p>
        <p class="card__description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props_carte = defineProps({
  title: String,
  description: String,
  image: String,
});

const imageSrc = computed(() => {
  return new URL(`../assets/${props_carte.image}.png`, import.meta.url).href;
});
</script>

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 0 5px #d67d91;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
  /* Indique que la carte va se transformer */
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px black;
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(to right, #d67d91, #feb47b);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card__description {
  margin: 10px 0 0;
  font-size: 12px;
  color: #FFFF;
  line-height: 1.4;
}

.card-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

@media (max-width: 768px) {
  .card {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .card__title {
    font-size: 20px;
  }

  .card__description {
    font-size: 12px;
  }
}
</style>
