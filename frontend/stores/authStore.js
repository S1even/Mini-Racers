import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        username: localStorage.getItem("username") || null,
        token: localStorage.getItem("token") || null,
    }),
    actions: {
        login(user, token) {
            this.username = user;
            this.token = token;
            localStorage.setItem("username", user);
            localStorage.setItem("token", token);
        },
        logout() {
            this.username = null;
            this.token = null;
            localStorage.removeItem("username");
            localStorage.removeItem("token");
        },
    },
});
