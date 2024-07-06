const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    phonenumber:{
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return value.toString().length == 10;
            },
            message: "Please check the Mobile Number",
        },
    },
    password:{
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return value.toString().length >= 8;
            },
            message: "Password must be at least 8 characters long",
        },
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;


