const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const emailRegex = require("../middleware/emailRegex");
router.post("/signup", emailRegex, userController.signup);
router.post("/login", userController.login);
module.exports = router;
