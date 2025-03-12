const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected :)");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Stop the application if we have critical error
    }
};

module.exports = connectDB;
