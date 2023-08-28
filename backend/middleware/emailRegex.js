const emailRegex = (req, res, next) => {
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailRegex.test(email) && req.body.password.length >= 8) {
        next();
      } else if (req.body.password.length <= 8 && emailRegex.test(email)) {
        res.status(400).json({
          error: `Le mot de passe doit comporter au moins 8 caractères`,
        });
      } else if (!emailRegex.test(email) && req.body.password.length >= 8) {
        res.status(400).json({ error: "Format d'email invalide" });
      } else {
        res.status(400).json({
          error: `Le mot de passe doit comporter au moins 8 caractères & Format d'email invalide`,
        });
      }
      return;
    }
    validateEmail(req.body.email);
  };
  module.exports = emailRegex;