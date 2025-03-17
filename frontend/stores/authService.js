import axios from 'axios';
import { useAuthStore } from './authStore';

export const login = async (credentials, authStore, router) => {
    try {
        const response = await axios.post('http://localhost:5500/api/auth/login', credentials);
        console.log('Réponse de l\'API de connexion :', response.data);
        if (response.data.token && response.data.username && response.data.userId) {
            console.log('Utilisateur connecté :', response.data.username);
            authStore.login(response.data.username, response.data.token, response.data.userId);
            router.push('/'); 
        } else {
            console.error('Données de connexion manquantes dans la réponse.');
            throw new Error("Données de connexion manquantes.");
        }
    } catch (error) {
        if (error.response) {
            console.error('Erreur de connexion :', error.response.data.message);
            throw new Error(error.response.data.message || "Une erreur est survenue. Veuillez réessayer");
        } else {
            console.error('Erreur lors de la requête de connexion :', error.message);
            throw new Error("Une erreur est survenue. Veuillez réessayer");
        }
    }
};

export const logout = async (authStore, router) => {
    try {
        const token = authStore.token;
        if (!token) {
            throw new Error("Token is missing.");
        }
        await axios.post('http://localhost:5500/api/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        authStore.logout();
        router.push('/login');
    } catch (error) {
        console.error("Erreur lors de la déconnexion : ", error);
        throw error;
    }
};

export const register = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:5500/api/auth/register', credentials);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Une erreur est survenue. Veuillez réessayer");
        } else {
            throw new Error("Une erreur est survenue. Veuillez réessayer");
        }
    }
};

export const updateUserProfile = async (userData) => {
    const authStore = useAuthStore();
    authStore.checkTokenExpiration();
    const token = authStore.token;
    const userId = authStore.userId;

    if (!userId || !token) {
        throw new Error("User ID ou Token manquant.");
    }

    const updateData = { ...userData };
    Object.keys(updateData).forEach(key => {
        if (updateData[key] === undefined || updateData[key] === null) {
            delete updateData[key];
        }
    });

    try {
        const responseUpdate = await axios.put(`http://localhost:5500/api/auth/update/${userId}`, updateData, {
            headers: { Authorization: `Bearer ${token}` }
        });

        console.log(responseUpdate.data); // Pour vérifier la réponse

        if (responseUpdate.data.logout) {
            authStore.logout();
            alert('Votre profil a été mis à jour. Vous êtes maintenant déconnecté.');
            console.log('Déconnexion effectuée.');
            router.push('/login'); // Rediriger vers la page de connexion
        } else {
            alert('Profil mis à jour avec succès.');
        }

        return responseUpdate.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Une erreur est survenue. Veuillez réessayer");
        } else {
            throw new Error("Une erreur est survenue. Veuillez réessayer");
        }
    }
};


