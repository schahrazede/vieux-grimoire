const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({

    userId: { type: String },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    grade: { type: Number, min: 0, max: 5, default: 0 },
    imageUrl: { type: String, required: true },

});

module.exports = mongoose.model('Book', bookSchema);


