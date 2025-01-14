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
            subject: "Confirmation d'email",
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