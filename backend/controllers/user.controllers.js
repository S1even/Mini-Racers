const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const { confirmEmail } = require("./email.controllers");
const BlacklistModel = require("../models/blacklist.model");

module.exports.register = async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "The email address is invalid." });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Passwords do not match." })
        }

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "This email is already in use." });
        }

        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "This username is already taken." });
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
            subject: "Email confirmation Mini-Racers",
            html: `
                <h1>Welcome, ${username}!</h1>
                <p>Thank you for registering with Mini-Racers. Please confirm your email address by clicking on the link below :</p>
                <a href="${process.env.BASE_URL}/api/auth/confirm-email?token=${token}">Confirm email</a>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "User created! Please check your email to confirm." });
    } catch (error) {
        res.status(500).json({ message: "Error during registration", error: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Incorrect password." });
        }

        if (!user.isEmailconfirmed)
            return res.status(400).json({ message: "Please confirm your email" })

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        console.log({ message: user})
        res.status(200).json({ message: "Connection successful", token, username: user.username });
    } catch (error) {
        res.status(500).json({ message: "Error connecting", error: error.message });
    }
};

module.exports.editUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (String(req.params.id) !== String(req.user._id)) {
            return res.status(403).json({ message: "You are not authorized to modify this user." });
        }

        if (username) {
            const existingUsername = await UserModel.findOne({ username });
            if (existingUsername && String(existingUsername._id) !== String(req.params.id)) {
                return res.status(400).json({ message: "The username is already taken." });
            }
        }

        let emailChanged = false;

        if (email) {
            const existingEmail = await UserModel.findOne({ email });
            if (existingEmail && String(existingEmail._id) !== String(req.params.id)) {
                return res.status(400).json({ message: "This email is already in use." });
            }

            const user = await UserModel.findById(req.params.id);
            if (user.email !== email) {
                emailChanged = true;
            }
        }

        const updatedFields = { ...req.body };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updatedFields.password = await bcrypt.hash(password, salt);
        }

        if (emailChanged) {
            updatedFields.isEmailconfirmed = false;
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            updatedFields,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }

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
                subject: "Confirming your new Mini-Racers email",
                html: `
                    <h1>Welcome, ${updatedUser.username}!</h1>
                    <p>You have changed your email address. Please confirm your new email by clicking on the link below :</p>
                    <a href="${process.env.BASE_URL}/api/auth/confirm-email?token=${token}">Confirm my new email</a>
                `,
            };

            await transporter.sendMail(mailOptions);

            return res.status(200).json({
                message: "User updated. Please check your new email to confirm.",
            });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "Error during update", error: error.message });
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "ID invalid" });
        }

        if (String(userId) !== String(req.user._id)) {
            return res.status(403).json({ message: "You are not allowed to delete another user" });
        }

        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const token = req.headers.authorization.split(" ")[1];
        // add token in blacklist
        await BlacklistModel.create({ token });
        console.log(`Token in blacklist: ${token}`);

        await UserModel.findByIdAndDelete(userId);

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error while deleting", error: error.message });
    }
};

module.exports.logout = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(400).json({ message: "Token missing." });
        }

        // Add token in blacklist
        await BlacklistModel.create({ token });
        console.log(`Token in blacklist: ${token}`);

        res.status(200).json({ message: "Logout successful. Token invalidated." });
    } catch (error) {
        res.status(500).json({ message: "Error disconnecting", error: error.message });
    }
};