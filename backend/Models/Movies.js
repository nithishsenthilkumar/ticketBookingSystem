const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    movieId: { type: Number, required: true }, // Changed movieid to movieId
    name: { type: String, required: true },
    release_date: { type: Date }, // Fixed typo from release_data to release_date
    duration: { type: Number },
    director: { type: String }
});

const Movies = mongoose.model('Movies', moviesSchema); // Create the model

module.exports = Movies; // Export the model
