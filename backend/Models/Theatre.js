const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    seatId: {type: String, required: true},
    isFilled: {type: Boolean, default: false}
});

const showTimingSchema = new mongoose.Schema({
    showTime: {type: Date, required: true},
    seats: { type: seatSchema }
});

const theatreSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    location: {type: Location, required: true},
    showTiming: {type: showTimingSchema}
});

const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;