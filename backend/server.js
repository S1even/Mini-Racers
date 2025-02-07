const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/user.routes");

const port = 5500;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// NAMESPACES
app.use("/api/auth", userRoutes);

if (require.main === module) {
    app.listen(port, () => console.log("Server started at port " + port));
}

module.exports = app;
