<template>
  <div class="card-container">
    <div class="card">
      <img src="@/assets/mapsteven.png" class="card-image" loading="lazy">
      <div class="card__content">
        <p class="card__title">Speed Moutain</p>
        <p class="card__description">Une carte crée par Steven, proposant un circuit
          avec des virages bien réalisés. La vitesse ne vous fera pas peur sur ce parcours, où chaque
          virage est conçu pour défier les amateurs de sensations fortes. Préparez-vous à vivre une
          expérience excitante !</p>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/mapmorgan.png" class="card-image" loading="lazy">
      <div class="card__content">
        <p class="card__title">Turn of city</p>
        <p class="card__description">Une carte fun, crée par Morgan. Ce circuit
          est un véritable tourbillon de virages inattendus et de rebondissements surprenants. Il combine adrénaline et
          fun à chaque instant, avec une conduite débridée qui saura ravir ceux qui aiment les sensations fortes et
          l'imprévu. Préparez-vous à un défi excitant et délirant !</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  margin-left: 15vh;
  margin-right: 15vh;
  gap: 20px;
}

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
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Responsiveness */
@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-top: 10vh;
  }

  .card {
    width: 80%;
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
