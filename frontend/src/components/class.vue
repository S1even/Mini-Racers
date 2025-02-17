<style scoped>
.container {
  overflow-x: auto;
  /* Seulement pour l'axe X */
  display: flex;
  flex-wrap: nowrap;
  /* Evite que les éléments ne se décalent sur deux lignes */
  scroll-snap-type: x mandatory;
  width: 70%;
  margin: 0 auto;
  padding: 0 15px;
}

.card {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  /* Centrer le contenu */
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  /* Animation pour rendre l'interaction plus fluide */
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}

.title {
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 25px;
  font-weight: bold;
  color: #ffff;
  text-shadow: 2px 2px 4px grey;
  max-width: 100%;
  /* Evite que le titre ne dépasse */
}
</style>

<template>
  <div class="container">
    <div class="card">
      <img src="@/assets/ClassA.webp" class="card-image" loading="lazy">
      <p class="title">
        Class A
      </p>
    </div>
    <div class="card">
      <img src="@/assets/ClassB.webp" class="card-image" loading="lazy">
      <p class="title">
        Class B
      </p>
    </div>
    <div class="card">
      <img src="@/assets/Classcmenu.webp" class="card-image" loading="lazy">
      <p class="title">
        Class C
      </p>
    </div>

    <div class="card">
      <img src="@/assets/Classd.webp" class="card-image" loading="lazy">
      <p class="title">
        Class D
      </p>
    </div>

    <div class="card">
      <img src="@/assets/ClassE.webp" class="card-image" loading="lazy">
      <p class="title">
        Class E
      </p>
    </div>

    <div class="card">
      <img src="@/assets/Extra.webp" class="card-image" loading="lazy">
      <p class="title">
        Extras
      </p>
    </div>
  </div>
</template>
