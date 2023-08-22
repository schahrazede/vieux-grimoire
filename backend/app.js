require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); // Créez l'objet app ici

// Connexion à la base de données
mongoose.connect(`mongodb+srv://schahrazede:Yasmine2021@cluster0.lk0ervz.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('connexion à mongoDB réussie'))
  .catch(error => console.error('Erreur de connexion à MongoDB:', error));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use(cors());

// Maintenant, vous pouvez utiliser express.static
app.use('/images', express.static('images'));

const userRoute = require('./routes/userRoutes');
const bookroute = require('./routes/book');

app.use('/api/book', bookroute);
app.use('/api/auth', userRoute);

module.exports = app;
