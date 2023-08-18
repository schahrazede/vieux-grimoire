const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/UserController');

// Route pour la connexion (signin)
router.post('/signin', userCtrl.signin);
// Route pour l'inscription (signup)
router.post('/signup', userCtrl.signup);
module.exports = router;
