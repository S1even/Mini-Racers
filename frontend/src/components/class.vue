<style scoped>
.card {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: #f5f5f5;
  margin-left: 5%;
  position: relative;
  padding: 0;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.card-details {
  color: black;
  position: absolute;
  /* Placer les détails par-dessus l'image */
  bottom: 10px;
  /* Ajuster la position verticale des détails */
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(245, 245, 245, 0.5);
  /* Fond semi-transparent pour mieux voir le texte */
  padding: 0.5em;
  /* Ajouter un peu d'espace autour du texte */
  box-sizing: border-box;
  /* Inclure le padding dans les dimensions de l'élément */
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
}

/*Text*/
.text-title {
  font-size: 1.5em;
  font-weight: bold;
}

/*Hover*/
.card:hover {
  border-color: #d67d91;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}
</style>

<template>
  <div class="card">
    <img src="@/assets/ClassA.webp" alt="Card image" class="card-image">
    <div class="card-details">
      <p class="text-title">Class A</p>
    </div>
    <button class="card-button">More info</button>
  </div>
</template>
