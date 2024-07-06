const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {type: String, require: true},
    bookedData: {type: Date, default: Date.now, required: true},
    status: {type: String},
    bookedAt: {type: Date, default: Date.now},
    totalAmount: {type: Number, required: true}
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;