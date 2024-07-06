const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    id:{type: Number, required: true, unique: true},
    name:{type: String, required: true},
    location:{type: Location, required: true},
});

const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;