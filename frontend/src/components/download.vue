<template>
  <button v-if="isAuthenticated" class="shadow__btn" @click="downloadFile">
    Download
  </button>
  <button v-else class="shadow__btn" @click="redirectToLogin">
    Login to Download
  </button>
</template>

<script setup>
import { useAuthStore } from '../../stores/authStore';
import { useRouter } from "vue-router";
import { computed } from 'vue';

const authStore = useAuthStore();
const router = useRouter();

const isAuthenticated = computed(() => !!authStore.token);

const downloadFile = () => {
  // Remplace avec l'URL de ton fichier
  window.location.href = "https://drive.google.com/drive/u/3/folders/1Jze32y9BgvrvcKYuRGH-pBnCYUIwUMSf";
};

const redirectToLogin = () => {
  router.push("/login");
};
</script>
<style scoped>
.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
  position: relative;
  bottom: -250px;
  left: 50%;
  /* Centrer horizontalement */
  transform: translateX(-50%);
  /* Centrer horizontalement */
}

.shadow__btn {
  background: #3788f0;
  box-shadow: 0 0 25px #3788f0;
}

.shadow__btn:hover {
  box-shadow: 0 0 5px #3788f0,
    0 0 25px #3788f0,
    0 0 50px #3788f0,
    0 0 100px #3788f0;
}

/* Responsive styles for phones */
@media (max-width: 768px) {
  .shadow__btn {
    font-size: 15px;
    padding: 8px 16px;
    bottom: -250px;
    /* Ajuste l'espace en bas pour les petits écrans */
  }
}

@media (max-width: 480px) {
  .shadow__btn {
    font-size: 14px;
    padding: 7px 14px;
    bottom: -250px;
    /* Ajuste l'espace en bas pour les très petits écrans */
  }
}
</style>
