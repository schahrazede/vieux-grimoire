const express = require('express');
const router = express.Router(); // Utilisez la fonction Router ici, en l'appelant comme une fonction
const auth = require('../middleware/auth'); // Assurez-vous que le chemin d'accès vers le middleware est correct
const bookCtrl = require('../controllers/books');

// Route pour obtenir la liste de tous les livres
router.get('/', auth, bookCtrl.getAllBooks);

// Route pour créer un nouveau livre
router.post('/', auth, bookCtrl.createBook);

// Route pour obtenir un livre spécifique par son ID
router.get('/:id', auth, bookCtrl.getOneBook);

// Route pour modifier un livre par son ID
router.put('/:id', auth, bookCtrl.modifyBook);

// Route pour supprimer un livre par son ID
router.delete('/:id', auth, bookCtrl.deleteBook);

module.exports = router;
