const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

module.exports.confirmEmail = async (req, res) => {
    const { token } = req.query; // Récupère le token dans la query string
    
    if (!token) {
        return res.status(400).json({ message: 'Token manquant' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifie le token
        const user = await UserModel.findById(decoded.userId); // Trouve l'utilisateur à partir de l'ID décodé
        
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Met à jour l'utilisateur pour marquer son email comme confirmé
        user.isEmailConfirmed = true;
        await user.save();

        return res.status(200).json({ message: 'Email confirmé avec succès' });
    } catch (error) {
        console.error("Erreur lors de la confirmation de l'email :", error);
        return res.status(500).json({ message: 'Erreur interne du serveur' });
    }
};
