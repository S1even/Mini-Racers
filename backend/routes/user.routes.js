const express = require("express");
const { register } = require("../controllers/user.controllers");
const { confirmEmail } = require("../controllers/email.controllers");
const router = express.Router();


// Routes Open
router.post("/register", register);
router.get("/confirm-email", confirmEmail);




// Routes secure


module.exports = router