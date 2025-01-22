const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5500;
const app = express();
const userRoutes = require("./routes/user.routes");

// Connexion DB
connectDB();




//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// NAMESPACES
app.use("/api/auth", userRoutes);

// Start a server
app.listen(port, () => console.log("Server started at port " + port))