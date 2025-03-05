import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        username: localStorage.getItem("username") || null,
        email: localStorage.getItem("email") || null,
        token: localStorage.getItem("token") || null,
        userId: localStorage.getItem("userId") || null, // Ajoutez userId ici
    }),
    actions: {
        login(user, token, userId) {
            this.username = user;
            this.token = token;
            this.userId = userId; // Stockez userId dans le store
            localStorage.setItem("username", user);
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId); // Stockez userId dans localStorage
        },
        logout() {
            this.username = null;
            this.token = null;
            this.userId = null; // Supprimez userId à la déconnexion
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            localStorage.removeItem("userId"); // Supprimez userId de localStorage
        },
    },
});
