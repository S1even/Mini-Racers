import axios from 'axios';
import { useAuthStore } from './authStore';

export const login = async (credentials, authStore, router) => {
    try {
        const response = await axios.post('http://localhost:5500/api/auth/login', credentials);
        console.log('Réponse de l\'API de connexion :', response.data);
        if (response.data.token && response.data.username && response.data.userId) { // Vérifier la présence de userId
            console.log('Utilisateur connecté :', response.data.username);
            authStore.login(response.data.username, response.data.token, response.data.userId); // Stocker également le userId
            router.push('/'); // Rediriger vers la page d'accueil
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
        const token = authStore.token; // Récupérez le token depuis le store d'authentification
        if (!token) {
            throw new Error("Token is missing.");
        }
        await axios.post('http://localhost:5500/api/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        authStore.logout(); // Appeler la méthode de déconnexion du store
        router.push('/login'); // Rediriger vers la page de connexion
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
    const authStore = useAuthStore();  // Utilisez le store Pinia
    const token = authStore.token;  // Récupérer le token depuis le store
    const userId = authStore.userId;  // Récupérer le userId depuis le store

    // Si le userId ou token est manquant, lever une erreur
    if (!userId || !token) {
        throw new Error("User ID or Token is missing.");
    }

    try {
        console.log("Updating profile for userId:", userId);  // Vérifiez que userId est défini

        const response = await axios.put(`http://localhost:5500/api/auth/update/${userId}`, userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error while updating profile: ", error);
        throw error;
    }
};
