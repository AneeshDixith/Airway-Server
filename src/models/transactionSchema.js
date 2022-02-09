// const mongoose = require('mongoose');
// const user = require('./userSchema');
// const ticket = require('./ticketSchema');

// const transactionSchema = mongoose.Schema({

//     trxn_amt : {
//         type : Number,
//         required : true
//     },

//     trxn_date : {
//         type : Date,
//         default : Date.now
//     },

//     trxn_status : {
//         type : Boolean,
//         //default : true,
//         required : true
//     },

//     Ticket_id : {
//         type : Number,
//         required: true,
//         ref : ticket
//     },

//     User_id : {
//         type : String,
//         required : true,
//         ref : user
//     }
// });

// module.exports = mongoose.model('Transaction', transactionSchema);