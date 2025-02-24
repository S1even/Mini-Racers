<template>
    <header>
        <div class="navbar">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/logonav.png" alt="Logo Nav" class="logo-nav" />
                </router-link>
            </div>
            <ul class="links" v-if="!isMenuOpen || screenWidth > 992">
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
                <li><router-link to="/contents">Contents</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
            <div class="user_menu">
                <a href="#" class="action_btn" @click="toggleUserMenu">{{
                    username ? `Welcome
                    ${username}` : "Disconnected"
                    }}</a>
                <div class="dropdown_user" :class="{ open: isUserMenuOpen }">
                    <router-link to="/settings">⚙️ Settings</router-link>
                    <a href="#" @click="handlelogout">🚪 Logout</a>
                </div>
                <div class="toggle_btn" @click="toggleMenu" @mouseenter="isHovered = true"
                    @mouseleave="isHovered = false">
                    <font-awesome-icon :icon="isMenuOpen ? ['fas', 'times'] : ['fas', 'bars']" :bounce="isHovered"
                        size="lg" />
                </div>
            </div>
        </div>
        <div class="dropdown_menu" :class="{ open: isMenuOpen }">
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/contents">Contents</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><a href="#" class="action_btn" @click="toggleDropdownUserMenu">{{ username ? `${username}` :
                "Disconnected" }}</a></li>
            <div class="dropdown_user" :class="{ open: isDropdownUserMenuOpen }">
                <router-link to="/settings">⚙️ Settings</router-link>
                <a href="#" @click="handlelogout">🚪 Logout</a>
            </div>
        </div>
    </header>
</template>


<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../../stores/authStore";
import { logout } from "../../stores/authService";

const isMenuOpen = ref(false);
const isHovered = ref(false);
const authStore = useAuthStore();
const isUserMenuOpen = ref(false);
const isDropdownUserMenuOpen = ref(false);

const username = computed(() => authStore.username);
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
})

const toggleMenu = () => {
    if (screenWidth.value <= 992) {
        isMenuOpen.value = !isMenuOpen.value;
    }
};

const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value;
};

const toggleDropdownUserMenu = () => {
    isDropdownUserMenuOpen.value = !isDropdownUserMenuOpen.value;
};

const router = useRouter();
const handlelogout = async () => {
    try {
        await logout(authStore, router);
        console.log('Déconnexion réussie');
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
    }
};
</script>

<style scoped>
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
    background: linear-gradient(90deg, rgba(214, 125, 145, 0.5), rgba(114, 150, 250, 0.5), rgba(214, 125, 145, 0.5));

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
    z-index: 9999;
}

.dropdown_menu.open {
    height: 220px;
}

.dropdown_menu li {
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

.dropdown_user {
    display: none;
    position: absolute;
    right: 2rem;
    top: 60px;
    width: 200px;
    background: rgba(255, 255, 255, 0.274);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    z-index: 999;
}

.dropdown_user.open {
    display: block;
}

.dropdown_user a {
    display: block;
    padding: 10px;
    color: #333;
    text-align: center;
}

.dropdown_user a:hover {
    background: #d67d91;
}

/* Responsive Navbar */
@media (max-width: 992px) {

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

@media (min-width: 992px) {
    .dropdown_menu {
        display: none !important;
    }

    .navbar .links {
        display: flex !important;
    }
}
</style>