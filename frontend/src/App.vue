<template>
  <div id="app">
    <nav class="navbar">
      <img src="./assets/logoracer.png" alt="Logo" class="logo" />
      <div class="menu" @mouseenter="showDropdown" @mouseleave="startHideDropdownTimer">
        <button class="menu-btn">
          <img src="./assets/userlogo.png" alt="Menu" class="menu-icon" />
        </button>
        <div class="dropdown-content" :class="{ show: isDropdownVisible }" @mouseenter="clearHideDropdownTimer" @mouseleave="startHideDropdownTimer">
          <router-link to="/login" class="dropdown-item">Login</router-link>
          <router-link to="/register" class="dropdown-item">Register</router-link>
          <router-link to="/download" class="dropdown-item">Download</router-link>
        </div>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDropdownVisible = ref(false);
let hideDropdownTimer;

const showDropdown = () => {
  isDropdownVisible.value = true;
};

const hideDropdown = () => {
  isDropdownVisible.value = false;
};

const startHideDropdownTimer = () => {
  hideDropdownTimer = setTimeout(() => {
    hideDropdown();
  }, 200); // Délai avant de masquer le menu
};

const clearHideDropdownTimer = () => {
  clearTimeout(hideDropdownTimer);
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #2c2c2c; /* Couleur de fond gris foncé */
}

#app {
  text-align: center;
  min-height: 100vh; /* Utilise min-height pour couvrir toute la hauteur */
  display: flex;
  flex-direction: column;
  background-color: #2c2c2c;
}

.navbar {
  position: absolute; /* Rendre la barre de navigation absolue */
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alignement du contenu à gauche */
  align-items: center;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.5); /* Couleur de fond transparente */
  padding: 0 20px;
  z-index: 10; /* Assure que la barre de navigation reste au-dessus du contenu */
}

.navbar .logo {
  height: 83px;
  width: 100px;
  border-radius: 10px;
  margin-right: auto;
}

.menu {
  position: relative;
  display: inline-block;
}

.menu-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.menu-icon {
  height: 40px;
  width: 40px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Utilise flex pour prendre tout l'espace disponible */
  width: 100%;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #333;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 5px;
  margin-top: 10px;
}

.dropdown-content.show {
  display: block;
}

.dropdown-item {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #575757;
}
</style>
