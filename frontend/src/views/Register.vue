<template>
  <div>
    <navbar />
    <carousel />
  </div>
  <div class="car-container">
    <img src="@/assets/logonav.png" alt="Voiture" class="car" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import navbar from '@/components/navbar.vue';
import carousel from '@/components/carousel.vue';
const isDrifting = ref(false);

onMounted(() => {
  isDrifting.value = true;
});
</script>

<style scoped>
body {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.car-container {
  position: relative;
  width: 300px;
}

.car {
  width: 100%;
  animation: drift 2s infinite alternate ease-in-out;
}

.wheel {
  position: absolute;
  width: 20%;
  animation: spin 0.5s infinite linear;
}

.wheel.front {
  left: 65%;
  bottom: 10%;
}

.wheel.rear {
  left: 15%;
  bottom: 10%;
}

.smoke {
  position: absolute;
  width: 50px;
  bottom: 10%;
  left: 10%;
  opacity: 0.5;
  animation: smoke 2s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes drift {
  0% {
    transform: translateX(0) rotate(-2deg);
  }

  100% {
    transform: translateX(10px) rotate(2deg);
  }
}

@keyframes smoke {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 0.3;
    transform: scale(1.2);
  }

  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
