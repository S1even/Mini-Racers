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
  position: fixed;
  bottom: 120px;
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
    bottom: 80px;
    /* Ajuste l'espace en bas pour les petits écrans */
  }
}

@media (max-width: 480px) {
  .shadow__btn {
    font-size: 14px;
    padding: 7px 14px;
    bottom: 60px;
    /* Ajuste l'espace en bas pour les très petits écrans */
  }
}
</style>

<template>
  <button class="shadow__btn">
    Download
  </button>
</template>
