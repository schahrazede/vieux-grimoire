const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
// Définition du schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
// Appliquer le plugin uniqueValidator au schéma
userSchema.plugin(uniqueValidator);

// Créer et exporter le modèle d'utilisateur

module.exports = mongoose.model('User', userSchema);
