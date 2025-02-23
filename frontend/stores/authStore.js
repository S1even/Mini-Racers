import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        username: localStorage.getItem("username") || null,
    }),
    actions: {
        login(user) {
            this.username = user;
            localStorage.setItem("username", user);
        },
        logout() {
            this.username = null;
            localStorage.removeItem("username");
        },
    },
});
