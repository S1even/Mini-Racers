const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connecté :)");
    } catch (err) {
        console.error("Erreur lors de la connexion à MongoDB :", err);
        process.exit(1); // Stop the application if we have critical error
    }
};

module.exports = connectDB;
