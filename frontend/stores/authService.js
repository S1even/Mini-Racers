import axios from 'axios';

export const login = async (credentials, authStore, router) => {
    try {
        const response = await axios.post('http://localhost:5500/api/auth/login', credentials);
        console.log('Réponse de l\'API de connexion :', response.data);
        if (response.data.token && response.data.username) {
            console.log('Utilisateur connecté :', response.data.username);
            authStore.login(response.data.username, response.data.token); // Stockez le username dans le store
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