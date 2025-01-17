const express = require("express");
const { register, login, editUser, deleteUser } = require("../controllers/user.controllers");
const { confirmEmail } = require("../controllers/email.controllers");
const authenticateUser = require("../middlewares/auth.middleware");
const router = express.Router();


// Routes Open
router.post("/register", register);
router.get("/confirm-email", confirmEmail);
router.post("/login", login);




// Routes secure
router.put("/update/:id", authenticateUser, editUser);
router.delete("/delete/:id", authenticateUser, deleteUser);

module.exports = router