const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const { confirmEmail } = require("./email.controllers");

module.exports.register = async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "L'adresse email est invalide." });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Les mots de passe ne correspondent pas." })
        }

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }

        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Ce nom d'utilisateur est déjà pris." });
        }

        const user = new UserModel({username, email, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Confirmation d'email Mini-Racers",
            html: `
                <h1>Bienvenue, ${username}!</h1>
                <p>Merci pour votre inscription à Mini-Racers. Veuillez confirmer votre adresse email en cliquant sur le lien ci-dessous :</p>
                <a href="${process.env.BASE_URL}/api/auth/confirm-email?token=${token}">Confirmer mon email</a>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "Utilisateur créé ! Veuillez vérifier votre email pour le confirmer." });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'inscription", error: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Mot de passe incorrect." });
        }

        if (!user.isEmailconfirmed)
            return res.status(400).json({ message: "Veuilliez confirmer votre e-mail" })

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({ message: "Connexion réussie", token });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la connexion", error: error.message });
    }
};

module.exports.editUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Vérification que l'utilisateur modifie son propre compte
        if (String(req.params.id) !== String(req.user._id)) {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à modifier cet utilisateur." });
        }

        // Vérifier si le username existe déjà
        if (username) {
            const existingUsername = await UserModel.findOne({ username });
            if (existingUsername && String(existingUsername._id) !== String(req.params.id)) {
                return res.status(400).json({ message: "Le nom d'utilisateur est déjà pris." });
            }
        }

        let emailChanged = false;

        // Vérifier si l'email existe déjà
        if (email) {
            const existingEmail = await UserModel.findOne({ email });
            if (existingEmail && String(existingEmail._id) !== String(req.params.id)) {
                return res.status(400).json({ message: "Cet email est déjà utilisé." });
            }

            // Vérifier si l'email a changé
            const user = await UserModel.findById(req.params.id);
            if (user.email !== email) {
                emailChanged = true;
            }
        }

        const updatedFields = { ...req.body };

        // Crypter le mot de passe si présent
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updatedFields.password = await bcrypt.hash(password, salt);
        }

        if (emailChanged) {
            updatedFields.isEmailconfirmed = false; // Marquer l'email comme non confirmé
        }

        // Mettre à jour l'utilisateur
        const updatedUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            updatedFields,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        // Si l'email a été modifié, envoyer un email de confirmation
        if (emailChanged) {
            const token = jwt.sign({ userId: updatedUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Confirmation de votre nouvel email Mini-Racers",
                html: `
                    <h1>Bonjour, ${updatedUser.username}!</h1>
                    <p>Vous avez changé votre adresse email. Veuillez confirmer votre nouvel email en cliquant sur le lien ci-dessous :</p>
                    <a href="${process.env.BASE_URL}/api/auth/confirm-email?token=${token}">Confirmer mon nouvel email</a>
                `,
            };

            await transporter.sendMail(mailOptions);

            return res.status(200).json({
                message: "Utilisateur mis à jour. Veuillez vérifier votre nouvel email pour le confirmer.",
            });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour", error: error.message });
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "ID invalide" });
        }

        if (String(userId) !== String(req.user._id)) {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer un autre utilisateur" });
        }

        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        await UserModel.findByIdAndDelete(userId);

        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression", error: error.message });
    }
};