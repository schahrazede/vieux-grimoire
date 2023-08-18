const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Une fonction pour enregistrer un nouvel utilisateur
exports.signup = (req, res,next) => {
  bcrypt.hash (req,body,password, 10)
  .then (hash => {
    const user = new User ({
    email : req.body.email,
    password :hash
    });
    user.save()
    .then(() => res.status(201).json({ message:"utilisateur crée"}))
    .catch(error => res.status(400).json({error}));
  })
  .catch(error => res.status(500).json({error}));
};
exports.signin = (req, res,next) => {
  user.findOne({email : req.body.email})
  .then(user => {
    if (!user){
      return res.status(401).json({error: 'paire identifiant/mot de passe incorrect'})
 }
 bcrypt.compare(req.body.password,user.password)
 .then (valid => {
  if (!valid) {
    return res.status(401).json({error: 'paire identifiant/mot de passe incorrect'})
  }
  res.status(200).json ({
    userId: user._id,
    tokon:jwt.sign(
      {userId: user._id},
      'RANDON_TOKEN_SECRET',
      {expiresIn:'24h'}
    )
  });
 })
 .catch(error => res.status(500).json({error}));
  })
  .catch(error => 
    {res.status(500).json({error})
  });
};