const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    movieid: {type: Number, required: true},
    name: {type: String, required: true},
    release_data: {type: Date},
    duration: {type: Number},
    director: {type: String}
});