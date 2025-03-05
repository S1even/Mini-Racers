const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const BlacklistModel = require("../models/blacklist.model");

const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];  // Extraire le token des en-têtes
    if (!token) {
        return res.status(401).json({ message: "Authentication required." });  // Si pas de token, renvoyer 401
    }

    try {
        const isBlacklisted = await BlacklistModel.findOne({ token });  // Vérifier si le token est blacklisté
        if (isBlacklisted) {
            return res.status(401).json({ message: "This token is expired or invalidated." });  // Si token blacklisté, renvoyer 401
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Vérifier la validité du token
        const user = await UserModel.findById(decoded.id);  // Récupérer l'utilisateur depuis la base de données

        if (!user) {
            return res.status(404).json({ message: "User not found." });  // Si utilisateur non trouvé, renvoyer 404
        }

        if (!user.isEmailconfirmed) {
            return res.status(403).json({ message: "Unconfirmed email." });  // Si email non confirmé, renvoyer 403
        }

        req.user = user;  // Ajouter l'utilisateur à la requête
        next();  // Passer à la prochaine fonction middleware
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });  // Si token invalide, renvoyer 401
    }
};

module.exports = authenticateUser;
