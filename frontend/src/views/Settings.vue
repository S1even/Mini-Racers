<template>
    <div class="settings-page">
        <Navbar />
        <div class="settings-container">
            <EditProfile 
                :username="authStore.username"
                :email="authStore.email"
                :password="authStore.password"
                :confirmpassword="authStore.password"
                :errorMessage="errorMessage"
                @update:username="updateUsername"
                @update:email="updateEmail"
                @update:password="updatePassword"
                @update:confirmpassword="updateConfirmPassword"
                @submit="handleProfileUpdate"
            />
        </div>
    </div>
    <div>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue';
import EditProfile from '@/components/setcard.vue';
import Footer from '@/components/footer.vue';
import { useAuthStore } from '../../stores/authStore';
import { useRouter } from 'vue-router';
import { updateUserProfile } from '../../stores/authService';

const authStore = useAuthStore();
const errorMessage = ref('');
const router = useRouter();

// Variables pour les données du formulaire
const newUsername = ref(authStore.username);
const newEmail = ref(authStore.email);
const newPassword = ref('');
const newConfirmPassword = ref('');

// Handlers pour mettre à jour les données
const updateUsername = (username) => {
    newUsername.value = username;
};
const updateEmail = (email) => {
    newEmail.value = email;
};
const updatePassword = (password) => {
    newPassword.value = password;
};
const updateConfirmPassword = (confirmpassword) => {
    newConfirmPassword.value = confirmpassword;
};

// Soumettre les modifications au backend
const handleProfileUpdate = async (updatedProfile) => {
    const updatedData = {
        username: newUsername.value,
        email: newEmail.value,
        password: newPassword.value,
        confirmpassword: newConfirmPassword.value
    };

    try {
        await updateUserProfile(updatedData);
        authStore.login(newUsername.value, authStore.token); // Actualiser le store
        alert('Profile updated successfully!');
    } catch (error) {
        errorMessage.value = error.message;
    }
};
</script>

<style scoped>
.settings-page {
  height: 100vh;
  background-image: url('@/assets/Designer2.png');
  background-size: cover;
  background-position: center;
  background-color: #ffff;
}

.settings-container {
    max-width: 800px;
    margin: 0 auto;
}

.error-message {
    color: red;
}
</style>