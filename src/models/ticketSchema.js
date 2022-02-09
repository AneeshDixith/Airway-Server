const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const User = require('../models/userSchema');

const ticketSchema = mongoose.Schema({
    userId : {
        type: ObjectId,
        required: true,
        ref : User
    },

    flightId : {
        type : String,
        required : true
    },

    source : {
        type : String,
        required : true
    },

    destination : {
        type : String,
        required : true
    },

    dateOfTravel : {
        type : Date,
        required : true
    },
    
    numberOfSeats : {
        type : Number,
        required : true
    },

    departuteTime : {
        type :String,
        required: true
    },

    arrivalTime : {
        type : String,
        required : true
    },

    duration : {
        type : String,
        required : true
    },

    airlineCode : {
        type : String,
        required : true
    },

    airlineName : {
        type : String,
        required : true
    },

    totalPrice : {
        type : Number,
        required : true
    },

    trxn_date : {
        type : Date,
        default : Date.now
    },
        
    cancelled : {
        type : Boolean,
        default : false
    },

    rewardPointsAdded : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Tickets', ticketSchema);
