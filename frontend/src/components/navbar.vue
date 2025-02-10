<template>
    <header>
      <div class="navbar">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logonav.png" alt="Logo Nav" class="logo-nav" />
          </router-link>
        </div>
        <ul class="links" v-if="!isMenuOpen">
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/content">Contents</router-link></li>
            <li><router-link to="/contact">About</router-link></li>
        </ul>
        <a href="#" class="action_btn" v-if="!isMenuOpen">Get started</a>
        <div 
        class="toggle_btn"
        @click="toggleMenu"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        >
          <font-awesome-icon
          :icon="isMenuOpen ? ['fas', 'times'] : ['fas', 'bars']"
          :bounce="isHovered"
          size="lg" />
        </div>
      </div>
  
      <div class="dropdown_menu" :class="{ open: isMenuOpen }">
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/content">Contents</router-link></li>
        <li><router-link to="/contact">About</router-link></li>
        <li><router-link to="#" class="action_btn">Get started</router-link></li>
    </div>
    </header>
  </template>
  
  
  <script setup>
  import { ref } from "vue";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { RouterLink } from "vue-router";
  
  const isMenuOpen = ref(false);
  const isHovered = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
  
li {
    list-style: none;
}
  
a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
}
  
a:hover {
    color: #d67d91;
}
  
header {
    position: relative;
    padding: 0 2rem;
}
  
.navbar {
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
  
.navbar .logo {
    font-size: 1.5rem;
    font-weight: bold;
}
  
.navbar .links {
    display: flex;
    gap: 2rem;
}
  
.navbar .toggle_btn {
    color: #d67d91;
    display: flex;
    justify-content: center;
    cursor: pointer;
    display: none;
}

.action_btn {
    background-color: #d67d91;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
}

.action_btn:hover {
    scale: 1.05;
    color: #fff;
}

.action_btn:active {
    scale: 0.95;
}
/* Menu dropdown */
.dropdown_menu {
    display: none;
    position: absolute;
    right: 2rem;
    top: 60px;
    height: 0;
    width: 300px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    overflow: hidden;
    transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dropdown_menu.open {
    height: 220px;
}

.dropdown_menu li{
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dropdown_menu .action_btn {
    width: 100%;
    display: flex;
    justify-content: center;
}

.logo-nav {
    height: 70px;
}
/* Responsive Navbar */
@media (max-width: 992px){
    .navbar .links,
    .navbar .action_btn {
        display: none;
    }

    .navbar .toggle_btn {
        display: block;
    }

    .dropdown_menu {
        display: block;
    }
}

@media (max-width: 576px) {
    .dropdown_menu {
    left: 2rem;
    width: unset;
    }
}
</style>
  