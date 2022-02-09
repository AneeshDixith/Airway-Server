const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name : {
        type : String,
        required: true 
    },

    mobile_no : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        unique: true,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    reward_points : {
        type : Number,
        default : 0
    }
});

module.exports = mongoose.model('Users', userSchema);