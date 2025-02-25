<template>
  <div class="carmaps">
    <div class="container-cars-maps">
      <div class="row">
        <div>
          <div class="box">
            <img src="../assets/circuits/SpeedMontain.PNG" alt="Speed Montain" />
          </div>
          <router-link to="/content" class="title-link">Maps</router-link>
        </div>
        <div>
          <div class="box">
            <img src="../assets/cars/Skyline.png" alt="Skyline" />
          </div>
          <router-link to="/content#cars" class="title-link">Cars</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.carmaps {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-bottom: 100px;
}

.container-cars-maps {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.row {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.box {
  width: 300px;
  height: 200px;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
  margin: 20px;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title-link {
  display: block;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.title-link:hover {
  text-decoration: underline;
  color: #d67d91;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
}
</style>