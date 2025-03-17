const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/user.routes");

const port = 5500;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ['http://localhost:5173', 'https://mini-racers-git-main-s1evens-projects.vercel.app'],
    credentials: true,
}));

// NAMESPACES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

if (require.main === module) {
    app.listen(port, () => console.log("Server started at port " + port));
}

module.exports = app;
