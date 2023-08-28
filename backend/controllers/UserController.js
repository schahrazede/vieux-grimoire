// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const User = require('../models/User')

// exports.signup = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10)
//       .then(hash => {
//         const user = new User({
//           email: req.body.email,
//           password: hash
//         });
//         user.save()
//           .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//           .catch(error => res.status(400).json({ error }));
//       })
//       .catch(error => res.status(500).json({ error }));
//   };

//   exports.login = (req, res, next) => {
//     User.findOne({ email: req.body.email })
//         .then(user => {
//             if (!user) {
//                 return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
//             }
//             bcrypt.compare(req.body.password, user.password)
//                 .then(valid => {
//                     if (!valid) {
//                         return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
//                     }
//                     res.status(200).json({
//                         userId: user._id,
//                         token: jwt.sign(
//                             {userId: user._id},
//                             'JWT_SECRET',
//                             { expiresIn: '24h'}
//                         )
//                     });
//                 })
//                 .catch(error => res.status(500).json({ error }));
//         })
//         .catch(error => res.status(500).json({ error }));
//  };
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// Fonction pour valider le format de l'email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

exports.signup = (req, res, next) => {
  // Valider l'email et la longueur du mot de passe avant de procéder
  if (!validateEmail(req.body.email)) {
    return res.status(400).json({ error: 'Format d\'email invalide' });
  }

  if (req.body.password.length < 8) {
    return res.status(400).json({ error: 'Le mot de passe doit comporter au moins 8 caractères' });
  }

  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  // Valider l'email avant de procéder
  if (!validateEmail(req.body.email)) {
    return res.status(400).json({ error: 'Format d\'email invalide' });
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'JWT_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};



  
