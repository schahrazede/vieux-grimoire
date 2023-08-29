
const emailRegex = require('password-validator');

const passwordSchema = new emailRegex();

passwordSchema
.is().min(8)        //Il doit avoir au moins 8 caractères.                                              
.has().uppercase()  //Il doit contenir au moins une lettre majuscule.                                              
.has().digits(1)    //Il doit contenir au moins un chiffre                           
.has().not().spaces()     //Il ne doit pas contenir d'espaces                     


module.exports = (req, res, next) => {
    const password = req.body.password;

    if (!passwordSchema.validate(password)) {
        return res.status(400).json({ message: 'Le mot de passe doit comporter au moins 8 caractères' });
    }

    next();
};