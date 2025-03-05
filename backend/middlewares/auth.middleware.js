const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const BlacklistModel = require("../models/blacklist.model");

const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Authentication required." });
    }

    try {
        const isBlacklisted = await BlacklistModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: "This token is expired or invalidated." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (!user.isEmailconfirmed) {
            return res.status(403).json({ message: "Unconfirmed email." });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};

module.exports = authenticateUser;
